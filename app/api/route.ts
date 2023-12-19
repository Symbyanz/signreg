import { mailOptions, transporter } from "@/config/nodemailer";

export async function POST(req: Request) {
    if (req.method === "POST") {
        const body = await req.json()
        
        if (!body.email || !body.phone || !body.content) {
            return Response.json({ message: "Bad request1" })
            // return res.status(400).json({ message: "Bad request" })
        }

        try {
            await transporter.sendMail({
                ...mailOptions,
                subject: "Тестовая заявка",
                text: "Тест",
                html: `
                    <p>Email: ${body.email} </p>
                    <p>Phone: ${body.phone} </p>
                    <p>Message: ${body.content} </p>
                `,
            })
            // return res.status(200).json({ success: true })
            return Response.json({ success: true })
        } catch (error) {
            console.log(error);
            // return res.status(400).json({ message: (error as Error).message })
            return Response.json({ message: (error as Error).message })
        }
    }
    return Response.json({ message: "Bad request2" })
    // return res.status(400).json({ message: "Bad request" })
}
