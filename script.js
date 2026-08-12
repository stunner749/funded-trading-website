const accounts = {
  "5K": {
    size: "$5,000",
    target: "8%",
    loss: "10%",
    days: "5 Days",
    fee: "$49"
  },
  "10K": {
    size: "$10,000",
    target: "8%",
    loss: "10%",
    days: "5 Days",
    fee: "$89"
  },
  "25K": {
    size: "$25,000",
    target: "8%",
    loss: "10%",
    days: "5 Days",
    fee: "$149"
  },
  "50K": {
    size: "$50,000",
    target: "8%",
    loss: "10%",
    days: "5 Days",
    fee: "$249"
  },
  "100K": {
    size: "$100,000",
    target: "8%",
    loss: "10%",
    days: "5 Days",
    fee: "$399"
  }
};

const buttons = document.querySelectorAll(".account-buttons button");
const details = document.querySelectorAll(".account-card strong");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const key = button.textContent.replace("$", "");
    const account = accounts[key];

    details[0].textContent = account.size;
    details[1].textContent = account.target;
    details[2].textContent = account.loss;
    details[3].textContent = account.days;
    details[4].textContent = account.fee;
  });
});
