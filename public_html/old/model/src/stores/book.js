/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Perfect Day
 * Copyright(c) 2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ book

PerfectDay.stores.book = new Ext.data.Store({

    // {{{ model

    model: 'PerfectDay.models.book',

    // }}}
    // {{{ data

    data: [
        { title: 'Book1', author: 'Author1'},
        { title: 'Book2', author: 'Author2'},
        { title: 'Book3', author: 'Author3'},
        { title: 'Book4', author: 'Author4'},
        { title: 'Book5', author: 'Author5'}
    ]

    // }}}

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
