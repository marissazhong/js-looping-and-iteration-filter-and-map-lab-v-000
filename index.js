// Code your solution here:

function driversWithRevenueOver(driver, revenue) {
  result = [];
  return driver.filter(x => x.revenue > revenue);
}
