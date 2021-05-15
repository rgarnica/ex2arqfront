const headerStyle = {
    backgroundColor: '#006ac8',
    color: 'white',
    width: '100%',
}

const contentWrapper = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2em 0',
}

export default function Header(props) {
    return (
        <header className="Header" style={headerStyle}>
            <div style={contentWrapper}>
                {props.children}
            </div>
        </header>
    );
};
