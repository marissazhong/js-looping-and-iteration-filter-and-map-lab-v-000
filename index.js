// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(x => x.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(x => x.name);
}

function exactMatch(drivers, attribute) {
  return drivers.filter(x => x[attribute.keys()[0]] === attribute.values()[0]);
}
