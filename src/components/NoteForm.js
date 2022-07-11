import React from 'react';
 
class NoteForm extends React.Component {
    constructor(props) {
        super(props);
        
        // inisialisasi state
        this.state = {
            filled: true,
            lengthTitle: 50,
            title: '',
            body: '',
            createdAt: +new Date(),
            archived: false,
        }
        
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        const title = event.target.value;
        let lengthTitle = 50 - title.length;
        this.setState({ lengthTitle });
        if (lengthTitle > 0) {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    title: title,
                }
            });
        }
    }

    onBodyChangeEventHandler(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        if (this.state.body === '' || this.state.title === '') {
            const filled = false;
            this.setState({ filled });
        } else {
            const filled = true;
            this.setState({ filled });
            let data = {
                title: this.state.title,
                body: this.state.body,
                createdAt: this.state.createdAt,
                archived: this.state.archived,
            }
            this.props.addNote(data);
        }
        setTimeout(() => {
            this.setState({title: '', body: ''});
        }, 1000)
    }

    render() {
        return (
            <div className="right-side">
                <form className="main" onSubmit={this.onSubmitEventHandler}>
                    <div className="text">
                        <h2>Tambah Catatan</h2>
                        <p>Lengkapi seluruh data untuk membuat catatan baru</p>
                    </div>
                    <div className="input-text">
                        <input type="text" value={this.state.title} placeholder='Judul Catatan' onChange={this.onTitleChangeEventHandler} />
                        {
                            (this.state.lengthTitle <= 0) ? <p className='danger'>Judul telah melebihi batas maksimal jumlah karakter</p> : ''
                        }
                        {
                            (this.state.lengthTitle <= 50 && this.state.lengthTitle !== 0) ? <p className='danger'>Tersisa {this.state.lengthTitle} karakter diperbolehkan</p> : ''
                        }
                    </div>
                    <div className="input-text">
                        <p>Catatan :</p>
                        <textarea cols="5" rows="5" value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
                    </div>
                    {
                        (!this.state.filled) ? <p className='danger'>Silahkan lengkapi data terlebih dahulu</p> : ''
                    }
                    <button type='submit' className="buttonAdd">Buat Catatan</button>
                </form>
            </div>
        );
    }
}

export default NoteForm;