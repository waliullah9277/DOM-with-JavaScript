document
  .getElementById("add-money-toggle")
  .addEventListener("click", function () {
    getFeaturesById("add-money-form-hide");
  });

document
  .getElementById("cash-out-toggle")
  .addEventListener("click", function () {
    getFeaturesById("cash-out-form-hide");
  });

document
  .getElementById("transaction-toggle")
  .addEventListener("click", function () {
    getFeaturesById("transaction-history-hide");
  });
