let store = {
    _state: {
        dialogsPage: {
            messages: [
                { name: 'Alina', id: 0, avatar: 'https://cdn-icons-png.flaticon.com/512/921/921126.png', message: 'Утро доброе!' },
                { name: 'Vadim', id: 1, avatar: 'https://cdn-icons-png.flaticon.com/512/921/921125.png', message: 'Доброе утро!' },
            ]
        },
        persons: [
            { name: 'Vadim', id: 0, avatar: 'https://cdn-icons-png.flaticon.com/512/921/921125.png' },
            { name: 'Alina', id: 1, avatar: 'https://cdn-icons-png.flaticon.com/512/921/921126.png' },
            { name: 'Mark', id: 2, avatar: 'https://cdn-icons-png.flaticon.com/512/921/921093.png' },
            { name: 'Kate', id: 3, avatar: 'https://cdn-icons-png.flaticon.com/512/921/921091.png' },
        ]
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('ok');
    },
    // _callSubscriber === rerenderAll
    subscribe(observer) {
        this._callSubscriber = observer
    }
}

export default store