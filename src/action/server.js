"use server";

export async function addToCart(prevState, queryData) {
  const itemID = queryData.get('itemId');
  if (itemID === "1") {
    return {
        success: true,
        cartSize: 12,
      };
  } else {
    await new Promise(resolve => {
      setTimeout(resolve, 2000);
    });
    return {
      success: false,
      message: "The item is sold out.",
    };
  }
}
