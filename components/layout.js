export default function Layout(props) {
    return (
        <div className="container">
            {props.children}
            <style jsx>{`
                .container {
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                main {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
            `}</style>
        </div>
        
    );
};

