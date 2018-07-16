// Code your solution here:

function driversWithRevenueOver(driver, revenue) {
  return driver.filter(x => x.revenue > revenue);
}

function driverNamesWithRevenueOver(driver, revenue) {
  return driversWithRevenueOver(driver, revenue).map(x => x.name);
}
