import React, { useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
 
import 'reactflow/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 200 }, data: { label: '2' } },
  { id: '3', position: { x: 100, y: 100 }, data: { label: '3' } },
];
const initialEdges = [
  { id: 'e1-2', source: '1', target: '2',markerStart: '1to2',
  markerEnd: { type: 'arrow', color: 'black' },},
  { id: 'e1-2', source: '3', target: '1',markerStart: '3to1',
  markerEnd: { type: 'arrow', color: 'black' }, },
];
 
export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
 
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div style={{ 
    width: '70vw', 
    height: '70vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid #000'}}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}