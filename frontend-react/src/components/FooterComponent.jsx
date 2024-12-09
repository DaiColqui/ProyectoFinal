import '../styles/Generic.css'

function Footer() {
    return (
        <>
            <footer className="bg-dark text-light py-4">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div class="social-icons">
                            <a href="http://facebook.com" class="text-primary me-3"><i class="bi bi-facebook"></i></a>
                            <a href="https://x.com/" class="text-info me-3"><i class="bi bi-twitter"></i></a>
                            <a href="https://www.instagram.com/" style={{ color: '#c918ff' }}><i class="bi bi-instagram"></i></a>
                        </div>
                        <div className="text-center">
                            <p className="mb-0 px-3">Grupin S.A. - Todos los derechos reservados.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer