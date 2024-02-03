function calculateProcessingFee(paymentMethod) {
    let processingFee;

    switch (paymentMethod.toLowerCase()) {
        case "credit":
            processingFee = 2;
            break;
        case "debit":
            processingFee = 1.5;
            break;
        case "paypal":
            processingFee = 3;
            break;
        default:
            console.log("Invalid payment method");
            return;
    }

    console.log(`Processing fee for ${paymentMethod} is ${processingFee}%`);
}

calculateProcessingFee("credit");
calculateProcessingFee("Debit");
calculateProcessingFee("paypal");
calculateProcessingFee("invalid");


 