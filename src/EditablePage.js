import React from "react";
import EditableBlock from "./EditableBlock";
import utils from './utils'
import './EditablePage.css';
import { supabase } from "./supabaseClient";
const initialBlock = { id: utils.uid(), html: "", tag: "p" };

// Imports

class EditablePage extends React.Component {
  constructor(props) {
    super(props);
    this.updatePageHandler = this.updatePageHandler.bind(this);
    this.addBlockHandler = this.addBlockHandler.bind(this);
    this.deleteBlockHandler = this.deleteBlockHandler.bind(this);
    this.saveLayout = this.saveLayout.bind(this);
    this.state = { blocks: [initialBlock], id:'abc123' };
  }
  signOut = async (e) => {
    const { error } = await supabase.auth.signOut();
    try {
      if (error) {
        throw error
      }
    } catch (error) {
      alert(error.error_description || error.message)
    }
  }
  async saveLayout(){
    this.state.blocks.map((block) => {
      console.log(block);
    })
    const res = await supabase.from('blocks').insert(this.state.blocks).execute();


  }

  updatePageHandler(updatedBlock) {
    const blocks = this.state.blocks;
    const index = blocks.map((b) => b.id).indexOf(updatedBlock.id);
    const updatedBlocks = [...blocks];
    updatedBlocks[index] = {
      ...updatedBlocks[index],
      tag: updatedBlock.tag,
      html: updatedBlock.html
    };
    this.setState({ blocks: updatedBlocks });
  }

  addBlockHandler(currentBlock) {
    const newBlock = { id: utils.uid(), html: "", tag: "p" };
    const blocks = this.state.blocks;
    const index = blocks.map((b) => b.id).indexOf(currentBlock.id);
    const updatedBlocks = [...blocks];
    updatedBlocks.splice(index + 1, 0, newBlock);
    this.setState({ blocks: updatedBlocks }, () => {
      currentBlock.ref.nextElementSibling.focus();
    });
  }

  deleteBlockHandler(currentBlock) {
    const previousBlock = currentBlock.ref.previousElementSibling;
    if (previousBlock) {
      const blocks = this.state.blocks;
      const index = blocks.map((b) => b.id).indexOf(currentBlock.id);
      const updatedBlocks = [...blocks];
      updatedBlocks.splice(index, 1);
      this.setState({ blocks: updatedBlocks }, () => {
        utils.setCaretToEnd(previousBlock);
        previousBlock.focus();
      });
    }
  }

  render() {
    return (
      <div className="Page">
        {this.state.blocks.map((block, key) => {
          return (
            <EditableBlock
              key={key}
              id={block.id}
              tag={block.tag}
              html={block.html}
              updatePage={this.updatePageHandler}
              addBlock={this.addBlockHandler}
              deleteBlock={this.deleteBlockHandler}
            />
          );

        })}
          <button className="save-layout" onClick={this.saveLayout}>
            Save layout
          </button>
          <button className="sign-out" onClick={this.signOut}>
            Sign out
          </button>
      </div>
    );
  }
}

export default EditablePage;