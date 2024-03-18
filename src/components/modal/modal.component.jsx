import { Link } from 'react-router-dom';

import Button from '../button/button.component';

import './modal.styles.scss';

const Modal = ({ isModalOpen, onClose }) => {
    if (!isModalOpen) {
        return null;
    }
    return (
        <section className="modal-overlay" onClick={onClose}>
            <div className='modal-container'>
                <article className="modal-content" onClick={e => e.stopPropagation()}>
                    <div className="close-x-btn" onClick={onClose}>
                        &#10005;
                    </div>
                    <main className="modal-main-content">
                        <header className='modal-header'>
                            <div className='check-symbol'>&#10003;</div>
                        </header>
                        <h3 className="">Thank you for your message!</h3>
                        <p className="">I will get back to you as quickly as possible.</p>
                        <p>Until then, let's connect on social media</p>
                        <div className='social-media-icons'>
                            <Link
                                to={'https://www.facebook.com/profile.php?id=61557189740001'}
                                target="_blank"
                                rel="noopener noreferrer">
                                facebook
                            </Link>
                            <Link
                                to={'https://www.instagram.com/mothersbirthdoula?igsh=N3FocjZkZTc2bXY4&utm_source=qr'}
                                target="_blank"
                                rel="noopener noreferrer">
                                instagram
                            </Link>

                        </div>
                        <footer className="modal-footer">
                            <Button customClassName='close-modal-btn' onClick={onClose}>Close</Button>
                        </footer>
                    </main>
                </article>
            </div>
        </section>
    )
}

export default Modal;