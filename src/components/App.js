import React, { Component } from 'react';

import classNames from 'classnames';

import PageContainer from './PageContainer';
import StickyMenu from './StickyMenu';

const pages = {
    1: {
        id: 1,
        title: 'Schedule',
        content: () => 'Some schedule content...',
    },
};

class App extends Component {
    state = {
        page: null,
    };

    setPage = ( page = null ) => {
        this.setState( { page } );
    };

    render() {
        const { page } = this.state;

        const className = classNames( 'pwa', {
            'pwa--showing-page': Boolean( page ),
        } );

        return (
            <div className={ className }>
                <div className="pwa__content">
                    <PageContainer
                        page={ pages[ page ] }
                        onClose={ () => this.setPage() }
                    />
                    <StickyMenu
                        pages={ pages }
                        onSelectPage={ this.setPage }
                    />
                </div>
            </div>
        );
    }
}

export default App;
