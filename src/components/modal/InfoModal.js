import React, { Component } from 'react'
import ReactModal from 'react-modal'
import { ReactComponent as CloseIcon } from './../../img/close.svg'

export class InfoModal extends Component {

  state = {
    open: false
  }

  toggleModalState = () => {
    const currentState = this.state.open

    this.setState(() => {
      return {
        open: !currentState
      }
    })
  }

  render() {
    return (
      <div className="infoModal">
        <button
          className="launchModal"
          onClick={this.toggleModalState.bind(this)}>More</button>

        <ReactModal
          isOpen={this.state.open}
          closeTimeoutMS={0}
          style={{ overlay: {}, content: {} }}
          contentLabel="Example Modal"
          portalClassName="ReactModalPortal"
          overlayClassName="infoModalOverlay"
          className="infoModalContent"
          bodyOpenClassName="infoModalOpen"
          ariaHideApp={true}
          shouldFocusAfterRender={true}
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          shouldReturnFocusAfterClose={true}
          onRequestClose={this.toggleModalState.bind(this)}
          appElement={document.getElementById('content')}
          role="dialog"
          parentSelector={() => document.body}
          aria={{
            labelledby: "heading",
            describedby: "full_description"
          }}>
            <div className="infoModalInner">
              <div className="infoModalHeader">
                <h6>{this.props.modalTitle}</h6>
                <button 
                  className="closeModal"
                  onClick={this.toggleModalState.bind(this)}>
                  <CloseIcon />
                </button>
              </div>
              { this.props.children }
            </div>
          </ReactModal>
      </div>
    )
  }

}
