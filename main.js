const addProductBtn1 = document.getElementById("addProductBtn1");
addProductBtn1.addEventListener("click", function() {
    const currentProductAmount = document.getElementById("productCount1").value;
    const currentProductAmountNumber = parseFloat(currentProductAmount);
    const newProductAmount = currentProductAmountNumber + 1;
   
    document.getElementById("productCount1").value = newProductAmount;
})