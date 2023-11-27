

// import React from "react";

// function Pay() {
//   const orderPlace = () => {
//     console.log("order placed");
//   };

//   const loadScript = (src) => {
//     return new Promise((resolve, reject) => {
//       const script = document.createElement("script");
//       script.src = src;
//       script.onload = () => {
//         resolve(true);
//       };
//       script.onerror = () => {
//         reject(false);
//       };
//       document.body.appendChild(script);
//     });
//   };

//   const pay = async () => {
//     let amount = 50;
//     const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

//     if (!res) {
//       alert("Razorpay SDK failed to load. Are you online?");
//       return;
//     }

//     const options = {
//       key: "rzp_test_xSvA8DOJ1bJvcC", // Replace with your actual Razorpay API key
//       amount: parseInt(amount * 100),
//       currency: "INR",
//       name: "ParkYourRide",
//       description: "Test Transaction",
//       image: "https://i.imgur.com/UgWZPTM.png",
//       handler: function (response) {
//         orderPlace();
//       },
//       notes: {
//         address: "India",
//       },
//       theme: {
//         color: "#364141",
//       },
//     };

//     const paymentObject = new window.Razorpay(options);
//     paymentObject.open();
//   };

//   return (
//     <div className="PG">
//       <button
//         className="button_pay"
//         onClick={() => {
//           pay();
//         }}
//       >
//         Pay with Razorpay
//       </button>
//     </div>
//   );
// }

// export default Pay;
import React from "react";

function Pay() {
  const orderPlace = () => {
    console.log("order placed");
  };

  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        reject(false);
      };
      document.body.appendChild(script);
    });
  };

  const pay = async () => {
    let amount = 50;
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_xSvA8DOJ1bJvcC", // Replace with your actual Razorpay API key
      amount: parseInt(amount * 100),
      currency: "INR",
      name: "ParkYourRide",
      description: "Test Transaction",
      image: "https://i.imgur.com/UgWZPTM.png",
      handler: function (response) {
        // Log the response for debugging
        console.log("Razorpay Response:", response);

        // Send the response to your server for further processing and database storage
        sendPaymentDetailsToServer(response);
      },
      notes: {
        address: "India",
      },
      theme: {
        color: "#364141",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  // Function to send payment details to the server
  const sendPaymentDetailsToServer = (response) => {
    // Make a POST request to your server to save the payment details in the database
    fetch("/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(response),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Payment details saved in the database:", data);
      })
      .catch((error) => {
        console.error("Error saving payment details:", error);
      });
  };

  return (
    <div className="PG">
      <button
        className="button_pay"
        onClick={() => {
          pay();
        }}
      >
        Pay with Razorpay
      </button>
    </div>
  );
}

export default Pay;
