const TARIFS_ID = '1QYfVIb8zvhkmPIAqwklMFmFZ3PurH1zyh0Uuw44_osw';
const RESAS_ID  = '1zkCuSsERAUF0_6A-m7O-s70PwMz2jRzY';

function doGet() {
  return HtmlService.createHtmlOutput(buildDashboard())
    .setTitle('Chez Maurisson')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function updatePrice(cell, value) {
  SpreadsheetApp.openById(TARIFS_ID).getSheetByName('Tarifs 2026').getRange(cell).setValue(value);
  SpreadsheetApp.flush();
  return true;
}

function updatePrices(updates) {
  var sheet = SpreadsheetApp.openById(TARIFS_ID).getSheetByName('Tarifs 2026');
  updates.forEach(function(u) { sheet.getRange(u.cell).setValue(u.value); });
  SpreadsheetApp.flush();
  return updates.length;
}

function getAllData() {
  var tRows = SpreadsheetApp.openById(TARIFS_ID).getSheetByName('Tarifs 2026').getDataRange().getValues();
  var tarifs = {};
  for (var i = 1; i < tRows.length; i++) {
    var d = tRows[i][0], p = tRows[i][3];
    if (d && p !== '') tarifs[Utilities.formatDate(new Date(d), 'Europe/Brussels', 'yyyy-MM-dd')] = p;
  }
  var rRows = SpreadsheetApp.openById(RESAS_ID).getSheetByName('Reservations').getDataRange().getValues();
  var resas = [];
  for (var j = 1; j < rRows.length; j++) {
    var row = rRows[j];
    if (!row[7] || !row[2] || String(row[1]).indexOf('Annul') > -1) continue;
    resas.push({ code: row[0], statut: String(row[1]), voyageur: row[2],
      arrivee: Utilities.formatDate(new Date(row[7]), 'Europe/Brussels', 'yyyy-MM-dd'),
      depart: Utilities.formatDate(new Date(row[8]), 'Europe/Brussels', 'yyyy-MM-dd'),
      nuits: row[9] || 1, revenus: row[11] || 0 });
  }
  return { tarifs: tarifs, resas: resas };
}

function buildDashboard() {
  var data = getAllData(), tarifs = data.tarifs, resas = data.resas;
  var reservedMap = {};
  resas.forEach(function(r) {
    var d = new Date(r.arrivee), end = new Date(r.depart);
    while (d < end) { reservedMap[Utilities.formatDate(d, 'Europe/Brussels', 'yyyy-MM-dd')] = r.voyageur; d.setDate(d.getDate()+1); }
  });
  var dateStr = Utilities.formatDate(new Date(), 'Europe/Brussels', 'dd/MM/yyyy HH:mm');
  return buildHTML(JSON.stringify(tarifs), JSON.stringify(resas), JSON.stringify(reservedMap), dateStr);
}

// buildHTML, CSS, HEADER, JS functions are in dashboard.html
// See dashboard.html for the full frontend code
