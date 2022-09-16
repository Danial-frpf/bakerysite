import { NextApiRequest, NextApiResponse } from "next";

const template = (req: NextApiRequest, _res: NextApiResponse) => {
    if (req.method === "GET") {
        // Process a GET request
        return;
    }

    if (req.method === "POST") {
        // Process a POST request
        return;
    }

    if (req.method === "DELETE") {
        // Process a DELETE request
        return;
    }

    if (req.method === "PATCH") {
        // Process a POST request
        return;
    }
};

export default template;
