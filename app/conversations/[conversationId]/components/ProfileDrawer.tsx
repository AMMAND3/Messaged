"use client";

import { Conversation, User } from "@prisma/client";

interface ProfileDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    data: Conversation & {
        user: User[]
    }
}

const ProfileDrawer : React.FC<ProfileDrawerProps> = ({
    isOpen, onClose, data
}) => {
    return(
        <div>
            profile
        </div>
    );
}

export default ProfileDrawer;