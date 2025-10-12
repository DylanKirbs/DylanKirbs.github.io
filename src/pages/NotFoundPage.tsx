
export const NotFoundPage: React.FC = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1 style={{ fontSize: '72px', marginBottom: '20px' }}>404</h1>
            <h2 style={{ marginBottom: '20px' }}>Page Not Found</h2>
            <p style={{ fontSize: '18px', color: '#666' }}>
                Oops! The page you're looking for doesn't exist.
            </p>

            <a href="#/" style={{ color: '#007bff', textDecoration: 'none', fontSize: '18px' }}>
                Go back to Home
            </a>

            {/* Search functionality can be added here in the future */}
        </div>
    );
}