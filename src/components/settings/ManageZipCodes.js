import React, { Component } from 'react'
import { store } from '../../store/store'
import {
  SortableContainer,
  SortableElement,
  arrayMove
} from 'react-sortable-hoc';
import { setZipHistory } from '../../actions/ForecastActions';

const SortableItem = SortableElement(({value}) => <li>{value}</li>);

const SortableList = SortableContainer(({codes}) => {
  return (
    <ul>
      {codes.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} onclick={() => {console.log('hit')}} />
      ))}
    </ul>
  );
});

export class ManagezipCodes extends Component {

  state = {
    zipCodes: store.getState().meta.zipCodeHistory
  }

  onReorder = ({oldIndex, newIndex}) => {
    this.setState(({zipCodes}) => ({
      zipCodes: arrayMove(zipCodes, oldIndex, newIndex),
    }), () => {
      store.dispatch(setZipHistory(this.state.zipCodes))
    })
  }

  onDelete = (zipCode) => {
    this.setState((state, props) => {
      return {
        zipCodes: [...this.state.zipCodes.filter(code => code !== zipCode)]
      }
    }, () => {
      store.dispatch(setZipHistory(this.state.zipCodes))
    })
  }

  render() {
    return (
      <div className="manageZipCodes">
        <h4>Manage Zip Codes</h4>
        <p>Reorder or remove</p>
        <div className="controls">
          <SortableList
            codes={this.state.zipCodes}
            onSortEnd={this.onReorder} />
          
          <div className="deleteBtns">
            {this.state.zipCodes.map((value, index) => (
              <button key={value + index} onClick={() => {this.onDelete(value)}}>x</button>
            ))}
          </div>
        </div>
      </div>
    )
  }

}
