"use client";

interface BodyProps {
    className?: string;
}

const Body: React.FC<BodyProps> = ({ className }) => {
    return( 
        <div className={className}>
            Body
        </div>
    )
};

export default Body;