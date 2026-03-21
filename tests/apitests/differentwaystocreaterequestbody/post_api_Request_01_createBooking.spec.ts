/*
Test: create booking
Request type: Post
Request body: static

Add url to playwright.config.ts file
    baseURL: 'https://restful-booker.herokuapp.com'
 
 
*/

import { test, expect } from "@playwright/test"

test("Create Post request using static body", async ({ request }) => {

    const requestBody = {

        firstname: "Jim",
        lastname: "Brown",
        totalprice: 1000,
        depositpaid: true,
        bookingdates: {
            checkin: "2025-07-01",
            checkout: "2025-07-05",
        },
        additionalneeds: "super bowls",
    }

    // send post request

    const response = await request.post("/booking", { data: requestBody }); //"/booking"
    //Note: The base url we keep on playwright.config.ts under base.url

    const responseBody = await response.json();  // Extractred response
    console.log(responseBody);


    //Validation
    //============
    //validate status
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);


    //validate response body attributes  (because there are 3 feilds in response)
    expect(responseBody).toHaveProperty("bookingid")
    expect(responseBody).toHaveProperty("booking")
    expect(responseBody).toHaveProperty("booking.additionalneeds")



    //Note: use https://jsonpathfinder.com/ to find json path

    //validate booking details
    const booking = responseBody.booking;
    expect(booking).toMatchObject({
        firstname: "Jim",
        lastname: "Brown",
        totalprice: 1000,
        depositpaid: true,
        additionalneeds: "super bowls",
    });

    //validate booking dates (nested json object)
    expect(booking.bookingdates).toMatchObject({
        checkin: "2025-07-01",
        checkout: "2025-07-05",
    });



})