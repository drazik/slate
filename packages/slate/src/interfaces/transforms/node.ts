import { Editor, Element, Location, Node, Path } from '../../index'
import { NodeMatch, PropsCompare, PropsMerge } from '../editor'
import { MaximizeMode, RangeMode } from '../../types/types'

export interface NodeTransforms {
  /**
   * Insert nodes at a specific location in the Editor.
   */
  insertNodes: <T extends Node>(
    editor: Editor,
    nodes: Node | Node[],
    options?: {
      at?: Location
      match?: NodeMatch<T>
      mode?: RangeMode
      hanging?: boolean
      select?: boolean
      voids?: boolean
    }
  ) => void

  /**
   * Lift nodes at a specific location upwards in the document tree, splitting
   * their parent in two if necessary.
   */
  liftNodes: <T extends Node>(
    editor: Editor,
    options?: {
      at?: Location
      match?: NodeMatch<T>
      mode?: MaximizeMode
      voids?: boolean
    }
  ) => void

  /**
   * Merge a node at a location with the previous node of the same depth,
   * removing any empty containing nodes after the merge if necessary.
   */
  mergeNodes: <T extends Node>(
    editor: Editor,
    options?: {
      at?: Location
      match?: NodeMatch<T>
      mode?: RangeMode
      hanging?: boolean
      voids?: boolean
    }
  ) => void

  /**
   * Move the nodes at a location to a new location.
   */
  moveNodes: <T extends Node>(
    editor: Editor,
    options: {
      at?: Location
      match?: NodeMatch<T>
      mode?: MaximizeMode
      to: Path
      voids?: boolean
    }
  ) => void

  /**
   * Remove the nodes at a specific location in the document.
   */
  removeNodes: <T extends Node>(
    editor: Editor,
    options?: {
      at?: Location
      match?: NodeMatch<T>
      mode?: RangeMode
      hanging?: boolean
      voids?: boolean
    }
  ) => void

  /**
   * Set new properties on the nodes at a location.
   */
  setNodes: <T extends Node>(
    editor: Editor,
    props: Partial<T>,
    options?: {
      at?: Location
      match?: NodeMatch<T>
      mode?: MaximizeMode
      hanging?: boolean
      split?: boolean
      voids?: boolean
      compare?: PropsCompare
      merge?: PropsMerge
    }
  ) => void

  /**
   * Split the nodes at a specific location.
   */
  splitNodes: <T extends Node>(
    editor: Editor,
    options?: {
      at?: Location
      match?: NodeMatch<T>
      mode?: RangeMode
      always?: boolean
      height?: number
      voids?: boolean
    }
  ) => void

  /**
   * Unset properties on the nodes at a location.
   */
  unsetNodes: <T extends Node>(
    editor: Editor,
    props: string | string[],
    options?: {
      at?: Location
      match?: NodeMatch<T>
      mode?: MaximizeMode
      hanging?: boolean
      split?: boolean
      voids?: boolean
    }
  ) => void

  /**
   * Unwrap the nodes at a location from a parent node, splitting the parent if
   * necessary to ensure that only the content in the range is unwrapped.
   */
  unwrapNodes: <T extends Node>(
    editor: Editor,
    options?: {
      at?: Location
      match?: NodeMatch<T>
      mode?: MaximizeMode
      split?: boolean
      voids?: boolean
    }
  ) => void

  /**
   * Wrap the nodes at a location in a new container node, splitting the edges
   * of the range first to ensure that only the content in the range is wrapped.
   */
  wrapNodes: <T extends Node>(
    editor: Editor,
    element: Element,
    options?: {
      at?: Location
      match?: NodeMatch<T>
      mode?: MaximizeMode
      split?: boolean
      voids?: boolean
    }
  ) => void
}

// eslint-disable-next-line no-redeclare
export const NodeTransforms: NodeTransforms = {
  insertNodes(editor, nodes, options) {
    editor.insertNodes(nodes, options)
  },
  liftNodes(editor, options) {
    editor.liftNodes(options)
  },
  mergeNodes(editor, options) {
    editor.mergeNodes(options)
  },
  moveNodes(editor, options) {
    editor.moveNodes(options)
  },
  removeNodes(editor, options) {
    editor.removeNodes(options)
  },
  setNodes(editor, props, options) {
    editor.setNodes(props, options)
  },
  splitNodes(editor, options) {
    editor.splitNodes(options)
  },
  unsetNodes(editor, props, options) {
    editor.unsetNodes(props, options)
  },
  unwrapNodes(editor, options) {
    editor.unwrapNodes(options)
  },
  wrapNodes(editor, element, options) {
    editor.wrapNodes(element, options)
  },
}
