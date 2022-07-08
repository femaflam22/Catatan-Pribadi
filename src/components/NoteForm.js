import React from 'react';

 
class NoteForm extends React.Component {
    constructor(props) {
        super(props);
        
        // inisialisasi state
        this.state = {
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
        this.setState((prevState) => {
            return {
                ...prevState,
                title: event.target.value,
            }
        });
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
        this.props.addNote(this.state);
        // setTimeout(function(){
        //     event.target.reset();
        // }, 2000);
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
                    </div>
                    <div className="input-text">
                        <p>Catatan :</p>
                        <textarea cols="5" rows="5" value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
                    </div>
                    <button type='submit' className="buttonAdd">Buat Catatan</button>
                </form>
            </div>
        );
    }
}

export default NoteForm;