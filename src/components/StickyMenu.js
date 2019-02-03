import React, { Component } from 'react';

import classNames from 'classnames';

class StickyMenu extends Component {
    state = {
        isOpen: false,
    };

    selectPage = ( id ) => {
        const { onSelectPage } = this.props;
        onSelectPage( id );
        this.toggleMenu();
    };

    toggleMenu = () => {
        this.setState(({ isOpen }) => ({
            isOpen: !isOpen,
        }));
    };

    render() {
        const { pages } = this.props;
        const { isOpen } = this.state;

        const className = classNames('sticky-menu', {
            'sticky-menu--is-closed': !isOpen,
        });

        return (
            <div className={className}>
                <button
                    className="main-button"
                    title="Menu"
                    type="button"
                    onClick={this.toggleMenu}
                >
                    X
                </button>
                {isOpen && (
                    Object.values( pages ).map(({ id, title }) => (
                        <button key={id} className="page-button" onClick={() => this.selectPage(id)}>{title}</button>
                    ))
                )}
            </div>
        );
    }
}

export default StickyMenu;
