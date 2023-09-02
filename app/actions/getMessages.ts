import prisma from "@/app/libs/prismadb";

const getMesage = async (
    conversationId: string
) => {
    try {
        const messages = await prisma.message.findMany({
            where: {
                conversationId: conversationId
            },
            include: {
                sender: true,
                seen: true,
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        return messages;
    } catch (error: any){
        return [];
    }
};
export default getMesage;