const CompareLogo = ({ className }: { className?: string }) => {
    return (
        <>     
            <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className={className}
            >
                <polyline points="16 3 21 8 16 13"></polyline>
                <line x1="21" y1="8" x2="9" y2="8"></line>
                <polyline points="8 21 3 16 8 11"></polyline>
                <line x1="3" y1="16" x2="15" y2="16"></line>
            </svg>
        </>
    );
}

export default CompareLogo;