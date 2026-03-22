import { test, expect } from "@playwright/test";

test('Get booking details by Id- path param', async ({ request }) => {

    const bookingId = 619; // we can pass as path parameter

    //sending get request along with path parameter
    const response = await request.get(`/booking/${bookingId}`);//url is in pw.config.ts

    //parse the response and print
    const responseBody = await response.json();
    console.log(responseBody);

    //add assertions
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

})


test.only('Get booking details by Name- query params', async ({ request }) => {

    const firstname = "Jim";
    const lastname = "Brown";

    //sending get request along with query parameters
    const response = await request.get("/booking", {
        params:
        {
            firstname,
            lastname
        }
    });

    //parse the response and print
    const responseBody = await response.json();
    console.log(responseBody);

    //add assertions
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    //check response should not be empty
    expect(responseBody.length).toBeGreaterThan(0);

    for(const item of responseBody)
    {
        expect(item).toHaveProperty('bookingid');
        expect(typeof item.bookingid).toBe("number");
        expect(item.bookingid).toBeGreaterThan(0);
        //The 3 above item will be responsible for all booking id
    }

})