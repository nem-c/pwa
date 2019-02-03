import React, { Component } from 'react';

class PageContainer extends Component {
    render() {
        const {
            onClose,
            page,
        } = this.props;

        if ( ! page ) {
            return null;
        }

        return (
            <div className="page-container">
                <header className="page-header">
                    <span className="page-header__title">{ page.title }</span>
                    <button className="page-header__close-button" onClick={ onClose }>X</button>
                </header>
                <main className="page-content">
                    <p>
                        { page.content() }
                    </p>
                </main>
            </div>
        );
    }
}

export default PageContainer;
