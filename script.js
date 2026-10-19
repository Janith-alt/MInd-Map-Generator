/**
 * MindFlow - Modern Interactive Mind Map Generator
 * Full-featured Vanilla JavaScript Mind Mapping Engine
 */

// ==========================================================================
// 1. Color Palettes & Starter Templates
// ==========================================================================
const PALETTES = {
    vibrant: ['#6366f1', '#3b82f6', '#06b6d4', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6', '#ef4444'],
    ocean: ['#0284c7', '#06b6d4', '#14b8a6', '#0ea5e9', '#3b82f6', '#6366f1'],
    sunset: ['#f43f5e', '#f97316', '#eab308', '#d946ef', '#ec4899', '#8b5cf6'],
    forest: ['#059669', '#10b981', '#84cc16', '#0d9488', '#16a34a', '#65a30d'],
    pastel: ['#818cf8', '#60a5fa', '#34d399', '#fcd34d', '#f472b6', '#a78bfa'],
    monochrome: ['#334155', '#475569', '#64748b', '#94a3b8', '#0f172a']
};

const TEMPLATES = {
    'brainstorming': {
        title: 'Product Brainstorming',
        root: {
            id: 'root',
            text: '💡 New Mobile App Idea',
            color: '#6366f1',
            children: [
                {
                    id: 'b1',
                    text: '🎯 Target Audience',
                    color: '#3b82f6',
                    children: [
                        { id: 'b1-1', text: 'College Students', color: '#3b82f6', children: [] },
                        { id: 'b1-2', text: 'Remote Freelancers', color: '#3b82f6', children: [] },
                        { id: 'b1-3', text: 'Small Business Owners', color: '#3b82f6', children: [] }
                    ]
                },
                {
                    id: 'b2',
                    text: '✨ Core Features',
                    color: '#10b981',
                    children: [
                        { id: 'b2-1', text: 'Real-time Collaboration', color: '#10b981', children: [] },
                        { id: 'b2-2', text: 'Smart AI Summaries', color: '#10b981', children: [] },
                        { id: 'b2-3', text: 'Offline Mode Support', color: '#10b981', children: [] }
                    ]
                },
                {
                    id: 'b3',
                    text: '⚠️ Key Challenges',
                    color: '#f59e0b',
                    children: [
                        { id: 'b3-1', text: 'User Retention in Month 1', color: '#f59e0b', children: [] },
                        { id: 'b3-2', text: 'Server Infrastructure Cost', color: '#f59e0b', children: [] }
                    ]
                },
                {
                    id: 'b4',
                    text: '🚀 Next Steps',
                    color: '#ec4899',
                    children: [
                        { id: 'b4-1', text: 'Figma Interactive Mockup', color: '#ec4899', children: [] },
                        { id: 'b4-2', text: '10 User Interviews', color: '#ec4899', children: [] },
                        { id: 'b4-3', text: 'Beta Landing Page Launch', color: '#ec4899', children: [] }
                    ]
                }
            ]
        }
    },
    'project-plan': {
        title: 'Project Roadmap',
        root: {
            id: 'root',
            text: '🚀 Project Launch Q4',
            color: '#3b82f6',
            children: [
                {
                    id: 'p1',
                    text: 'Phase 1: Research',
                    color: '#06b6d4',
                    children: [
                        { id: 'p1-1', text: 'Competitor Benchmark', color: '#06b6d4', children: [] },
                        { id: 'p1-2', text: 'User Personas', color: '#06b6d4', children: [] }
                    ]
                },
                {
                    id: 'p2',
                    text: 'Phase 2: Design',
                    color: '#8b5cf6',
                    children: [
                        { id: 'p2-1', text: 'Design System & Tokens', color: '#8b5cf6', children: [] },
                        { id: 'p2-2', text: 'Interactive Prototypes', color: '#8b5cf6', children: [] }
                    ]
                },
                {
                    id: 'p3',
                    text: 'Phase 3: Development',
                    color: '#10b981',
                    children: [
                        { id: 'p3-1', text: 'Frontend Architecture', color: '#10b981', children: [] },
                        { id: 'p3-2', text: 'API & Database Schema', color: '#10b981', children: [] },
                        { id: 'p3-3', text: 'Authentication & Security', color: '#10b981', children: [] }
                    ]
                },
                {
                    id: 'p4',
                    text: 'Phase 4: QA & Release',
                    color: '#f43f5e',
                    children: [
                        { id: 'p4-1', text: 'End-to-End Testing', color: '#f43f5e', children: [] },
                        { id: 'p4-2', text: 'Public Launch Event', color: '#f43f5e', children: [] }
                    ]
                }
            ]
        }
    },
    'swot': {
        title: 'SWOT Analysis',
        root: {
            id: 'root',
            text: '📊 Company SWOT',
            color: '#4f46e5',
            children: [
                {
                    id: 's1',
                    text: '💪 Strengths',
                    color: '#10b981',
                    children: [
                        { id: 's1-1', text: 'Strong brand loyalty', color: '#10b981', children: [] },
                        { id: 's1-2', text: 'Proprietary algorithm', color: '#10b981', children: [] },
                        { id: 's1-3', text: 'Fast iteration cycle', color: '#10b981', children: [] }
                    ]
                },
                {
                    id: 's2',
                    text: '🔍 Weaknesses',
                    color: '#f59e0b',
                    children: [
                        { id: 's2-1', text: 'Limited global sales team', color: '#f59e0b', children: [] },
                        { id: 's2-2', text: 'High customer support load', color: '#f59e0b', children: [] }
                    ]
                },
                {
                    id: 's3',
                    text: '🌟 Opportunities',
                    color: '#3b82f6',
                    children: [
                        { id: 's3-1', text: 'Emerging enterprise market', color: '#3b82f6', children: [] },
                        { id: 's3-2', text: 'Strategic API partnerships', color: '#3b82f6', children: [] }
                    ]
                },
                {
                    id: 's4',
                    text: '⚡ Threats',
                    color: '#ef4444',
                    children: [
                        { id: 's4-1', text: 'New low-cost competitors', color: '#ef4444', children: [] },
                        { id: 's4-2', text: 'Regulatory privacy updates', color: '#ef4444', children: [] }
                    ]
                }
            ]
        }
    },
    'meeting-notes': {
        title: 'Weekly Sync Notes',
        root: {
            id: 'root',
            text: '📝 Weekly All-Hands',
            color: '#6366f1',
            children: [
                {
                    id: 'm1',
                    text: '📅 Agenda',
                    color: '#3b82f6',
                    children: [
                        { id: 'm1-1', text: 'Sprint Highlights', color: '#3b82f6', children: [] },
                        { id: 'm1-2', text: 'Customer Feedback Review', color: '#3b82f6', children: [] }
                    ]
                },
                {
                    id: 'm2',
                    text: '💬 Key Decisions',
                    color: '#10b981',
                    children: [
                        { id: 'm2-1', text: 'Adopt new UI components', color: '#10b981', children: [] },
                        { id: 'm2-2', text: 'Target v2.0 for November', color: '#10b981', children: [] }
                    ]
                },
                {
                    id: 'm3',
                    text: '📌 Action Items',
                    color: '#f59e0b',
                    children: [
                        { id: 'm3-1', text: 'Janith: Finalize mockups', color: '#f59e0b', children: [] },
                        { id: 'm3-2', text: 'Dev Team: Code freeze on Friday', color: '#f59e0b', children: [] }
                    ]
                }
            ]
        }
    },
    'blank': {
        title: 'My Mind Map',
        root: {
            id: 'root',
            text: 'Central Topic',
            color: '#6366f1',
            children: []
        }
    }
};

// ==========================================================================
// 2. Application State & Storage
// ==========================================================================
const STORAGE_KEY = 'mindflow_map_data_v1';
const THEME_KEY = 'mindflow_theme';

const state = {
    title: 'Product Brainstorming',
    root: null,
    selectedId: null,
    layout: 'balanced', // 'balanced' | 'rightward' | 'downward'
    currentPalette: 'vibrant',
    
    // Viewport transform
    zoom: 1,
    pan: { x: 0, y: 0 },
    isPanning: false,
    startPan: { x: 0, y: 0 },

    // History stack for Undo / Redo
    history: [],
    historyIndex: -1,
    maxHistory: 30,

    // Search state
    searchQuery: '',
    searchMatches: [],
    searchMatchIndex: -1,

    // Layout cache (computed positions)
    layoutNodes: new Map()
};

// Generate unique node ID
function generateId() {
    return 'n_' + Math.random().toString(36).substr(2, 9);
}

// Deep clone helper
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

// Tree node search helpers
function findNodeById(root, id) {
    if (!root) return null;
    if (root.id === id) return root;
    if (root.children) {
        for (const child of root.children) {
            const found = findNodeById(child, id);
            if (found) return found;
        }
    }
    return null;
}

function findParentNode(root, id) {
    if (!root || !root.children) return null;
    for (const child of root.children) {
        if (child.id === id) return root;
        const found = findParentNode(child, id);
        if (found) return found;
    }
    return null;
}

function countTotalNodes(node) {
    if (!node) return 0;
    let count = 1;
    if (node.children && !node.collapsed) {
        for (const child of node.children) {
            count += countTotalNodes(child);
        }
    }
    return count;
}

function flattenAllVisibleNodes(node, list = []) {
    if (!node) return list;
    list.push(node);
    if (node.children && !node.collapsed) {
        for (const child of node.children) {
            flattenAllVisibleNodes(child, list);
        }
    }
    return list;
}

// ==========================================================================
// 3. History Management (Undo / Redo)
// ==========================================================================
function pushState() {
    // If not at the end of history, slice forward history
    if (state.historyIndex < state.history.length - 1) {
        state.history = state.history.slice(0, state.historyIndex + 1);
    }

    const snapshot = {
        title: state.title,
        root: deepClone(state.root),
        selectedId: state.selectedId,
        layout: state.layout,
        currentPalette: state.currentPalette
    };

    state.history.push(snapshot);
    if (state.history.length > state.maxHistory) {
        state.history.shift();
    } else {
        state.historyIndex++;
    }

    updateHistoryButtons();
    autoSave();
}

function undo() {
    if (state.historyIndex > 0) {
        state.historyIndex--;
        applySnapshot(state.history[state.historyIndex]);
        showToast('Undo');
    }
}

function redo() {
    if (state.historyIndex < state.history.length - 1) {
        state.historyIndex++;
        applySnapshot(state.history[state.historyIndex]);
        showToast('Redo');
    }
}

function applySnapshot(snapshot) {
    state.title = snapshot.title;
    state.root = deepClone(snapshot.root);
    state.selectedId = snapshot.selectedId;
    state.layout = snapshot.layout;
    state.currentPalette = snapshot.currentPalette;

    document.getElementById('mapTitleInput').value = state.title;
    updateLayoutDropdownUI();
    updatePaletteUI();
    renderMindMap();
    updateHistoryButtons();
    autoSave();
}

function updateHistoryButtons() {
    const undoBtn = document.getElementById('undoBtn');
    const redoBtn = document.getElementById('redoBtn');
    undoBtn.disabled = state.historyIndex <= 0;
    redoBtn.disabled = state.historyIndex >= state.history.length - 1;
}

// ==========================================================================
// 4. Layout Calculation Engine
// ==========================================================================
// Computes dimensions and (x, y) coordinates for all visible nodes
function computeLayout() {
    state.layoutNodes.clear();
    if (!state.root) return;

    // Estimate node bounding dimensions
    function measureNode(node, isRoot = false) {
        const textLen = (node.text || ' ').length;
        const width = isRoot 
            ? Math.max(160, Math.min(320, textLen * 9.5 + 64))
            : Math.max(120, Math.min(280, textLen * 8.2 + 48));
        const height = isRoot ? 54 : 42;
        return { width, height };
    }

    const rootDims = measureNode(state.root, true);
    state.root.width = rootDims.width;
    state.root.height = rootDims.height;
    state.root.x = 0;
    state.root.y = 0;
    state.layoutNodes.set(state.root.id, state.root);

    const children = state.root.children || [];
    if (state.root.collapsed || children.length === 0) return;

    // Calculate branch subtree heights
    function calcSubtreeHeight(node, isVertical = false) {
        const dims = measureNode(node);
        node.width = dims.width;
        node.height = dims.height;

        if (node.collapsed || !node.children || node.children.length === 0) {
            node.subtreeHeight = isVertical ? node.width : node.height;
            return node.subtreeHeight;
        }

        const gap = isVertical ? 24 : 18;
        let total = 0;
        node.children.forEach((child, i) => {
            const h = calcSubtreeHeight(child, isVertical);
            total += h + (i > 0 ? gap : 0);
        });
        node.subtreeHeight = Math.max(isVertical ? node.width : node.height, total);
        return node.subtreeHeight;
    }

    if (state.layout === 'balanced') {
        // Balanced layout: Split children between Right and Left
        const rightChildren = [];
        const leftChildren = [];

        children.forEach((child, index) => {
            if (index % 2 === 0) {
                rightChildren.push(child);
            } else {
                leftChildren.push(child);
            }
        });

        // Layout Right Subtree
        layoutHorizontalBranch(rightChildren, state.root, 1);
        // Layout Left Subtree
        layoutHorizontalBranch(leftChildren, state.root, -1);

    } else if (state.layout === 'rightward') {
        // Rightward layout: All children go Right
        layoutHorizontalBranch(children, state.root, 1);

    } else if (state.layout === 'downward') {
        // Downward hierarchy layout
        layoutVerticalBranch(children, state.root);
    }
}

// Layout horizontal branches (direction: 1 for right, -1 for left)
function layoutHorizontalBranch(branchList, parentNode, direction) {
    if (!branchList || branchList.length === 0) return;

    // Measure subtree heights
    const hGap = 65; // Horizontal gap between parent & children
    const vGap = 20; // Vertical gap between sibling nodes

    function measure(node) {
        const textLen = (node.text || ' ').length;
        node.width = Math.max(120, Math.min(280, textLen * 8.2 + 48));
        node.height = 42;

        if (node.collapsed || !node.children || node.children.length === 0) {
            node.subtreeHeight = node.height;
            return node.subtreeHeight;
        }

        let total = 0;
        node.children.forEach((c, idx) => {
            total += measure(c) + (idx > 0 ? vGap : 0);
        });
        node.subtreeHeight = Math.max(node.height, total);
        return node.subtreeHeight;
    }

    let totalBranchHeight = 0;
    branchList.forEach((node, idx) => {
        totalBranchHeight += measure(node) + (idx > 0 ? vGap : 0);
    });

    let currentY = parentNode.y - (totalBranchHeight / 2);

    branchList.forEach(node => {
        const nodeY = currentY + (node.subtreeHeight / 2);
        const nodeX = parentNode.x + direction * ((parentNode.width / 2) + hGap + (node.width / 2));

        node.x = nodeX;
        node.y = nodeY;
        node.direction = direction;
        state.layoutNodes.set(node.id, node);

        if (!node.collapsed && node.children && node.children.length > 0) {
            layoutHorizontalSubtree(node, direction, hGap, vGap);
        }

        currentY += node.subtreeHeight + vGap;
    });
}

function layoutHorizontalSubtree(parentNode, direction, hGap, vGap) {
    let currentY = parentNode.y - (parentNode.subtreeHeight / 2);

    parentNode.children.forEach(child => {
        const childY = currentY + (child.subtreeHeight / 2);
        const childX = parentNode.x + direction * ((parentNode.width / 2) + hGap + (child.width / 2));

        child.x = childX;
        child.y = childY;
        child.direction = direction;
        state.layoutNodes.set(child.id, child);

        if (!child.collapsed && child.children && child.children.length > 0) {
            layoutHorizontalSubtree(child, direction, hGap, vGap);
        }

        currentY += child.subtreeHeight + vGap;
    });
}

// Layout vertical hierarchy (downward org chart)
function layoutVerticalBranch(branchList, parentNode) {
    if (!branchList || branchList.length === 0) return;

    const vGap = 65; // Vertical distance
    const hGap = 24; // Horizontal distance

    function measure(node) {
        const textLen = (node.text || ' ').length;
        node.width = Math.max(120, Math.min(260, textLen * 8.2 + 48));
        node.height = 42;

        if (node.collapsed || !node.children || node.children.length === 0) {
            node.subtreeWidth = node.width;
            return node.subtreeWidth;
        }

        let total = 0;
        node.children.forEach((c, idx) => {
            total += measure(c) + (idx > 0 ? hGap : 0);
        });
        node.subtreeWidth = Math.max(node.width, total);
        return node.subtreeWidth;
    }

    let totalWidth = 0;
    branchList.forEach((c, i) => {
        totalWidth += measure(c) + (i > 0 ? hGap : 0);
    });

    let currentX = parentNode.x - (totalWidth / 2);

    branchList.forEach(child => {
        const childX = currentX + (child.subtreeWidth / 2);
        const childY = parentNode.y + (parentNode.height / 2) + vGap + (child.height / 2);

        child.x = childX;
        child.y = childY;
        child.direction = 0; // vertical
        state.layoutNodes.set(child.id, child);

        if (!child.collapsed && child.children && child.children.length > 0) {
            layoutVerticalSubtree(child, vGap, hGap);
        }

        currentX += child.subtreeWidth + hGap;
    });
}

function layoutVerticalSubtree(parentNode, vGap, hGap) {
    let currentX = parentNode.x - (parentNode.subtreeWidth / 2);

    parentNode.children.forEach(child => {
        const childX = currentX + (child.subtreeWidth / 2);
        const childY = parentNode.y + (parentNode.height / 2) + vGap + (child.height / 2);

        child.x = childX;
        child.y = childY;
        child.direction = 0;
        state.layoutNodes.set(child.id, child);

        if (!child.collapsed && child.children && child.children.length > 0) {
            layoutVerticalSubtree(child, vGap, hGap);
        }

        currentX += child.subtreeWidth + hGap;
    });
}

// ==========================================================================
// 5. Canvas Rendering Engine (DOM Nodes & SVG Connections)
// ==========================================================================
function renderMindMap() {
    computeLayout();

    const nodesContainer = document.getElementById('nodesContainer');
    const connectionsSvg = document.getElementById('connectionsSvg');

    nodesContainer.innerHTML = '';
    connectionsSvg.innerHTML = '';

    if (!state.root) return;

    // Render SVG curves and DOM cards
    renderSubtree(state.root, null, nodesContainer, connectionsSvg);

    // Update stats
    const totalCount = countTotalNodes(state.root);
    document.getElementById('nodeCountBadge').textContent = `${totalCount} Node${totalCount !== 1 ? 's' : ''}`;

    // Highlight search match
    updateSearchHighlight();
}

function renderSubtree(node, parent, nodesContainer, connectionsSvg) {
    // 1. Draw SVG connection path from parent
    if (parent) {
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const d = computeConnectorPath(parent, node);
        path.setAttribute('d', d);
        path.setAttribute('class', 'branch-path');
        path.setAttribute('stroke', node.color || parent.color || '#6366f1');
        path.setAttribute('stroke-width', parent.id === state.root.id ? '2.8' : '2');
        path.setAttribute('fill', 'none');
        connectionsSvg.appendChild(path);
    }

    // 2. Render DOM node card
    const card = document.createElement('div');
    card.id = `node-${node.id}`;
    card.className = `node-card ${node.id === state.root.id ? 'is-root' : ''} ${node.id === state.selectedId ? 'is-selected' : ''}`;
    card.style.left = `${node.x}px`;
    card.style.top = `${node.y}px`;
    card.style.width = `${node.width}px`;

    // Apply color accent border
    const branchColor = node.color || (parent ? parent.color : '#6366f1');
    card.style.borderLeftColor = branchColor;
    card.style.borderLeftWidth = '4px';

    // Left color bar indicator
    const colorTag = document.createElement('div');
    colorTag.className = 'node-color-tag';
    colorTag.style.backgroundColor = branchColor;
    card.appendChild(colorTag);

    // Node icon (if set)
    if (node.icon) {
        const iconSpan = document.createElement('span');
        iconSpan.className = 'node-icon';
        iconSpan.textContent = node.icon;
        card.appendChild(iconSpan);
    }

    // Node text
    const textSpan = document.createElement('span');
    textSpan.className = 'node-text';
    textSpan.textContent = node.text || 'New Topic';
    textSpan.title = 'Double-click to edit';
    card.appendChild(textSpan);

    // Quick Add Button on outer edge
    const addBtn = document.createElement('button');
    addBtn.className = `node-add-btn ${node.direction === -1 ? 'add-left' : 'add-right'}`;
    addBtn.innerHTML = '+';
    addBtn.title = 'Add child node';
    addBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        selectNode(node.id);
        addChildNode();
    });
    card.appendChild(addBtn);

    // Collapse / Expand toggle badge if node has children
    if (node.children && node.children.length > 0) {
        const badge = document.createElement('div');
        badge.className = `node-collapse-badge ${node.direction === -1 ? 'pos-left' : 'pos-right'}`;
        badge.textContent = node.collapsed ? `+${node.children.length}` : '−';
        badge.title = node.collapsed ? 'Expand branch' : 'Collapse branch';
        badge.addEventListener('click', (e) => {
            e.stopPropagation();
            node.collapsed = !node.collapsed;
            renderMindMap();
            pushState();
        });
        card.appendChild(badge);
    }

    // Selection on click
    card.addEventListener('click', (e) => {
        e.stopPropagation();
        selectNode(node.id);
    });

    // Double-click inline text edit
    card.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        startInlineEditing(node, textSpan, card);
    });

    // Right-click custom context menu
    card.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        e.stopPropagation();
        selectNode(node.id);
        openContextMenu(e.clientX, e.clientY, node);
    });

    nodesContainer.appendChild(card);

    // Render children recursively if not collapsed
    if (!node.collapsed && node.children) {
        node.children.forEach(child => {
            renderSubtree(child, node, nodesContainer, connectionsSvg);
        });
    }
}

// Compute smooth Bezier curve connector
function computeConnectorPath(p, c) {
    if (c.direction === 0) {
        // Vertical hierarchy
        const startX = p.x;
        const startY = p.y + (p.height / 2);
        const endX = c.x;
        const endY = c.y - (c.height / 2);
        const midY = startY + (endY - startY) * 0.5;
        return `M ${startX} ${startY} C ${startX} ${midY}, ${endX} ${midY}, ${endX} ${endY}`;
    }

    // Horizontal mind map (left or right)
    const isLeft = c.direction === -1;
    const startX = isLeft ? p.x - (p.width / 2) : p.x + (p.width / 2);
    const startY = p.y;
    const endX = isLeft ? c.x + (c.width / 2) : c.x - (c.width / 2);
    const endY = c.y;

    const dx = endX - startX;
    const ctrl1X = startX + dx * 0.5;
    const ctrl1Y = startY;
    const ctrl2X = endX - dx * 0.5;
    const ctrl2Y = endY;

    return `M ${startX} ${startY} C ${ctrl1X} ${ctrl1Y}, ${ctrl2X} ${ctrl2Y}, ${endX} ${endY}`;
}

// Inline Text Editor
function startInlineEditing(node, textSpan, card) {
    const currentText = node.text || '';
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'node-text-input';
    input.value = currentText;

    textSpan.style.display = 'none';
    card.insertBefore(input, textSpan);
    input.focus();
    input.select();

    let committed = false;

    function commit() {
        if (committed) return;
        committed = true;
        const newText = input.value.trim() || 'Untitled';
        if (node.text !== newText) {
            node.text = newText;
            pushState();
        }
        renderMindMap();
    }

    input.addEventListener('blur', commit);
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            commit();
        } else if (e.key === 'Escape') {
            committed = true;
            input.remove();
            textSpan.style.display = '';
        }
    });
}

// ==========================================================================
// 6. Node Actions (Add Child, Add Sibling, Delete, Select)
// ==========================================================================
function selectNode(id) {
    if (state.selectedId === id) return;
    state.selectedId = id;

    // Update active class on DOM
    document.querySelectorAll('.node-card').forEach(el => {
        el.classList.remove('is-selected');
    });

    const activeEl = document.getElementById(`node-${id}`);
    if (activeEl) {
        activeEl.classList.add('is-selected');
    }

    updateSelectedNodeSwatchUI();
}

function addChildNode() {
    const parent = findNodeById(state.root, state.selectedId) || state.root;
    if (!parent) return;

    if (!parent.children) parent.children = [];
    parent.collapsed = false;

    // Auto-pick branch color
    let childColor = parent.color;
    if (parent.id === state.root.id) {
        const palette = PALETTES[state.currentPalette] || PALETTES.vibrant;
        childColor = palette[parent.children.length % palette.length];
    }

    const newChild = {
        id: generateId(),
        text: 'New Idea',
        color: childColor,
        children: []
    };

    parent.children.push(newChild);
    state.selectedId = newChild.id;

    pushState();
    renderMindMap();

    // Instantly begin editing new child
    setTimeout(() => {
        const card = document.getElementById(`node-${newChild.id}`);
        if (card) {
            const span = card.querySelector('.node-text');
            if (span) startInlineEditing(newChild, span, card);
        }
    }, 60);

    showToast('Child node added');
}

function addSiblingNode() {
    if (!state.selectedId || state.selectedId === state.root.id) {
        addChildNode();
        return;
    }

    const parent = findParentNode(state.root, state.selectedId);
    if (!parent) return;

    const currentSelected = findNodeById(state.root, state.selectedId);
    const index = parent.children.findIndex(c => c.id === state.selectedId);

    const newSibling = {
        id: generateId(),
        text: 'New Sibling',
        color: currentSelected ? currentSelected.color : parent.color,
        children: []
    };

    parent.children.splice(index + 1, 0, newSibling);
    state.selectedId = newSibling.id;

    pushState();
    renderMindMap();

    setTimeout(() => {
        const card = document.getElementById(`node-${newSibling.id}`);
        if (card) {
            const span = card.querySelector('.node-text');
            if (span) startInlineEditing(newSibling, span, card);
        }
    }, 60);

    showToast('Sibling node added');
}

function deleteSelectedNode() {
    if (!state.selectedId) {
        showToast('Please select a node to delete', 'error');
        return;
    }

    if (state.selectedId === state.root.id) {
        if (confirm('Clear all branches and reset to central topic?')) {
            state.root.children = [];
            pushState();
            renderMindMap();
            showToast('All branches cleared');
        }
        return;
    }

    const parent = findParentNode(state.root, state.selectedId);
    if (parent) {
        parent.children = parent.children.filter(c => c.id !== state.selectedId);
        state.selectedId = parent.id;
        pushState();
        renderMindMap();
        showToast('Node deleted');
    }
}

// Arrow key navigation between nodes
function navigateTree(direction) {
    if (!state.selectedId || !state.root) return;

    const current = findNodeById(state.root, state.selectedId);
    const parent = findParentNode(state.root, state.selectedId);

    if (direction === 'ArrowUp' || direction === 'ArrowDown') {
        if (!parent) return;
        const siblings = parent.children;
        const idx = siblings.findIndex(c => c.id === state.selectedId);
        if (direction === 'ArrowUp' && idx > 0) {
            selectNode(siblings[idx - 1].id);
        } else if (direction === 'ArrowDown' && idx < siblings.length - 1) {
            selectNode(siblings[idx + 1].id);
        }
    } else if (direction === 'ArrowRight') {
        if (current && current.children && current.children.length > 0 && !current.collapsed) {
            selectNode(current.children[0].id);
        }
    } else if (direction === 'ArrowLeft') {
        if (parent) {
            selectNode(parent.id);
        }
    }
}

// ==========================================================================
// 7. Viewport Navigation (Pan & Zoom)
// ==========================================================================
function updateViewportTransform() {
    const viewport = document.getElementById('canvasViewport');
    viewport.style.transform = `translate(${state.pan.x}px, ${state.pan.y}px) scale(${state.zoom})`;
    document.getElementById('zoomResetBtn').textContent = `${Math.round(state.zoom * 100)}%`;
}

function setZoom(newZoom, focalX, focalY) {
    const clampedZoom = Math.min(Math.max(0.2, newZoom), 3.0);
    if (clampedZoom === state.zoom) return;

    if (focalX !== undefined && focalY !== undefined) {
        // Zoom towards focal point
        const zoomRatio = clampedZoom / state.zoom;
        state.pan.x = focalX - (focalX - state.pan.x) * zoomRatio;
        state.pan.y = focalY - (focalY - state.pan.y) * zoomRatio;
    }

    state.zoom = clampedZoom;
    updateViewportTransform();
}

function recenterCanvas() {
    const container = document.getElementById('canvasContainer');
    const rect = container.getBoundingClientRect();
    state.pan.x = rect.width / 2;
    state.pan.y = rect.height / 2;
    state.zoom = 1;
    updateViewportTransform();
}

function fitToScreen() {
    const container = document.getElementById('canvasContainer');
    const rect = container.getBoundingClientRect();

    const nodes = flattenAllVisibleNodes(state.root);
    if (nodes.length === 0) {
        recenterCanvas();
        return;
    }

    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    nodes.forEach(n => {
        const w = (n.width || 120) / 2;
        const h = (n.height || 42) / 2;
        minX = Math.min(minX, n.x - w);
        maxX = Math.max(maxX, n.x + w);
        minY = Math.min(minY, n.y - h);
        maxY = Math.max(maxY, n.y + h);
    });

    const contentWidth = (maxX - minX) + 120;
    const contentHeight = (maxY - minY) + 120;

    const scaleX = rect.width / contentWidth;
    const scaleY = rect.height / contentHeight;
    const fitScale = Math.min(1.2, Math.max(0.3, Math.min(scaleX, scaleY)));

    state.zoom = fitScale;
    state.pan.x = (rect.width / 2) - ((minX + maxX) / 2) * fitScale;
    state.pan.y = (rect.height / 2) - ((minY + maxY) / 2) * fitScale;

    updateViewportTransform();
}

// Mouse Pan and Zoom listeners
function initCanvasPanZoom() {
    const container = document.getElementById('canvasContainer');

    container.addEventListener('mousedown', (e) => {
        // Only pan if clicking empty space (not a node card or button)
        if (e.target.closest('.node-card') || e.target.closest('.floating-controls') || e.target.closest('.bottom-hints')) {
            return;
        }

        state.isPanning = true;
        state.startPan.x = e.clientX - state.pan.x;
        state.startPan.y = e.clientY - state.pan.y;
        container.classList.add('panning');
    });

    window.addEventListener('mousemove', (e) => {
        if (!state.isPanning) return;
        state.pan.x = e.clientX - state.startPan.x;
        state.pan.y = e.clientY - state.startPan.y;
        updateViewportTransform();
    });

    window.addEventListener('mouseup', () => {
        if (state.isPanning) {
            state.isPanning = false;
            container.classList.remove('panning');
        }
    });

    // Mouse wheel zoom
    container.addEventListener('wheel', (e) => {
        e.preventDefault();
        const rect = container.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const zoomDelta = e.deltaY < 0 ? 1.12 : 0.89;
        setZoom(state.zoom * zoomDelta, mouseX, mouseY);
    }, { passive: false });

    // Touch support (pinch to zoom and pan)
    let initialTouchDistance = null;
    let initialTouchCenter = { x: 0, y: 0 };

    container.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1 && !e.target.closest('.node-card')) {
            state.isPanning = true;
            state.startPan.x = e.touches[0].clientX - state.pan.x;
            state.startPan.y = e.touches[0].clientY - state.pan.y;
        } else if (e.touches.length === 2) {
            state.isPanning = false;
            const dx = e.touches[0].clientX - e.touches[1].clientX;
            const dy = e.touches[0].clientY - e.touches[1].clientY;
            initialTouchDistance = Math.hypot(dx, dy);
            initialTouchCenter = {
                x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
                y: (e.touches[0].clientY + e.touches[1].clientY) / 2
            };
        }
    }, { passive: true });

    container.addEventListener('touchmove', (e) => {
        if (state.isPanning && e.touches.length === 1) {
            state.pan.x = e.touches[0].clientX - state.startPan.x;
            state.pan.y = e.touches[0].clientY - state.startPan.y;
            updateViewportTransform();
        } else if (e.touches.length === 2 && initialTouchDistance) {
            const dx = e.touches[0].clientX - e.touches[1].clientX;
            const dy = e.touches[0].clientY - e.touches[1].clientY;
            const dist = Math.hypot(dx, dy);
            const scale = dist / initialTouchDistance;
            setZoom(state.zoom * scale, initialTouchCenter.x, initialTouchCenter.y);
            initialTouchDistance = dist;
        }
    }, { passive: true });

    container.addEventListener('touchend', () => {
        state.isPanning = false;
        initialTouchDistance = null;
    });
}

// ==========================================================================
// 8. Palette, Theme & Styling
// ==========================================================================
function applyColorPalette(paletteName) {
    state.currentPalette = paletteName;
    const colors = PALETTES[paletteName] || PALETTES.vibrant;

    // Re-assign branch colors
    if (state.root && state.root.children) {
        state.root.children.forEach((child, i) => {
            const branchColor = colors[i % colors.length];
            assignBranchColor(child, branchColor);
        });
    }

    updatePaletteUI();
    pushState();
    renderMindMap();
    showToast(`Palette applied: ${paletteName}`);
}

function assignBranchColor(node, color) {
    node.color = color;
    if (node.children) {
        node.children.forEach(child => assignBranchColor(child, color));
    }
}

function updatePaletteUI() {
    document.querySelectorAll('.theme-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.palette === state.currentPalette);
    });
}

function updateSelectedNodeSwatchUI() {
    const selected = findNodeById(state.root, state.selectedId);
    document.querySelectorAll('.color-swatch').forEach(swatch => {
        swatch.classList.toggle('active', selected && swatch.dataset.color === selected.color);
    });
}

function updateLayoutDropdownUI() {
    document.querySelectorAll('#layoutDropdown .menu-item').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.layout === state.layout);
    });
}

// ==========================================================================
// 9. Search Functionality
// ==========================================================================
function performSearch(query) {
    state.searchQuery = query.toLowerCase().trim();
    state.searchMatches = [];
    state.searchMatchIndex = -1;

    const countBadge = document.getElementById('searchCount');
    const prevBtn = document.getElementById('searchPrevBtn');
    const nextBtn = document.getElementById('searchNextBtn');

    if (!state.searchQuery) {
        countBadge.classList.add('hidden');
        prevBtn.classList.add('hidden');
        nextBtn.classList.add('hidden');
        updateSearchHighlight();
        return;
    }

    const allNodes = flattenAllVisibleNodes(state.root);
    allNodes.forEach(node => {
        if ((node.text || '').toLowerCase().includes(state.searchQuery)) {
            state.searchMatches.push(node.id);
        }
    });

    if (state.searchMatches.length > 0) {
        state.searchMatchIndex = 0;
        countBadge.textContent = `1/${state.searchMatches.length}`;
        countBadge.classList.remove('hidden');
        prevBtn.classList.remove('hidden');
        nextBtn.classList.remove('hidden');
        focusSearchMatch();
    } else {
        countBadge.textContent = '0/0';
        countBadge.classList.remove('hidden');
        prevBtn.classList.add('hidden');
        nextBtn.classList.add('hidden');
    }

    updateSearchHighlight();
}

function nextSearchMatch() {
    if (state.searchMatches.length === 0) return;
    state.searchMatchIndex = (state.searchMatchIndex + 1) % state.searchMatches.length;
    document.getElementById('searchCount').textContent = `${state.searchMatchIndex + 1}/${state.searchMatches.length}`;
    focusSearchMatch();
}

function prevSearchMatch() {
    if (state.searchMatches.length === 0) return;
    state.searchMatchIndex = (state.searchMatchIndex - 1 + state.searchMatches.length) % state.searchMatches.length;
    document.getElementById('searchCount').textContent = `${state.searchMatchIndex + 1}/${state.searchMatches.length}`;
    focusSearchMatch();
}

function focusSearchMatch() {
    if (state.searchMatchIndex < 0 || state.searchMatchIndex >= state.searchMatches.length) return;
    const matchId = state.searchMatches[state.searchMatchIndex];
    selectNode(matchId);

    // Pan canvas smoothly to focus node
    const node = state.layoutNodes.get(matchId);
    if (node) {
        const container = document.getElementById('canvasContainer');
        const rect = container.getBoundingClientRect();
        state.pan.x = (rect.width / 2) - node.x * state.zoom;
        state.pan.y = (rect.height / 2) - node.y * state.zoom;
        updateViewportTransform();
    }
    updateSearchHighlight();
}

function updateSearchHighlight() {
    document.querySelectorAll('.node-card').forEach(el => el.classList.remove('search-match'));
    if (state.searchMatches.length > 0 && state.searchMatchIndex >= 0) {
        const activeId = state.searchMatches[state.searchMatchIndex];
        const card = document.getElementById(`node-${activeId}`);
        if (card) card.classList.add('search-match');
    }
}

// ==========================================================================
// 10. Export & Import Functions (PNG, PDF, SVG, JSON, Markdown)
// ==========================================================================
async function exportToPng() {
    showToast('Preparing high-res PNG export...');
    try {
        const nodes = flattenAllVisibleNodes(state.root);
        if (nodes.length === 0) return;

        let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
        nodes.forEach(n => {
            const w = (n.width || 120) / 2;
            const h = (n.height || 42) / 2;
            minX = Math.min(minX, n.x - w);
            maxX = Math.max(maxX, n.x + w);
            minY = Math.min(minY, n.y - h);
            maxY = Math.max(maxY, n.y + h);
        });

        const padding = 60;
        const width = Math.ceil((maxX - minX) + padding * 2);
        const height = Math.ceil((maxY - minY) + padding * 2);
        const offsetX = -minX + padding;
        const offsetY = -minY + padding;

        const viewport = document.getElementById('canvasViewport');
        const prevTransform = viewport.style.transform;
        const isDarkMode = document.body.classList.contains('dark-mode');
        const bgColor = isDarkMode ? '#090d16' : '#ffffff';

        // Set 1:1 scale and offset for full capture
        viewport.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1)`;

        const canvas = await html2canvas(viewport, {
            backgroundColor: bgColor,
            scale: 2,
            width: width,
            height: height,
            x: 0,
            y: 0,
            useCORS: true,
            logging: false
        });

        viewport.style.transform = prevTransform;

        const link = document.createElement('a');
        link.download = `${sanitizeFilename(state.title)}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        showToast('PNG image exported successfully!', 'success');
    } catch (err) {
        updateViewportTransform();
        console.error('PNG Export failed', err);
        showToast('PNG export failed. Please check browser permissions.', 'error');
    }
}

async function exportToPdf() {
    showToast('Generating PDF document...');
    try {
        if (!window.jspdf || !window.jspdf.jsPDF) {
            throw new Error('PDF library not ready');
        }

        const nodes = flattenAllVisibleNodes(state.root);
        if (nodes.length === 0) return;

        let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
        nodes.forEach(n => {
            const w = (n.width || 120) / 2;
            const h = (n.height || 42) / 2;
            minX = Math.min(minX, n.x - w);
            maxX = Math.max(maxX, n.x + w);
            minY = Math.min(minY, n.y - h);
            maxY = Math.max(maxY, n.y + h);
        });

        const padding = 60;
        const width = Math.ceil((maxX - minX) + padding * 2);
        const height = Math.ceil((maxY - minY) + padding * 2);
        const offsetX = -minX + padding;
        const offsetY = -minY + padding;

        const viewport = document.getElementById('canvasViewport');
        const prevTransform = viewport.style.transform;
        const isDarkMode = document.body.classList.contains('dark-mode');
        const bgColor = isDarkMode ? '#090d16' : '#ffffff';

        viewport.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1)`;

        const canvas = await html2canvas(viewport, {
            backgroundColor: bgColor,
            scale: 2,
            width: width,
            height: height,
            x: 0,
            y: 0,
            useCORS: true,
            logging: false
        });

        viewport.style.transform = prevTransform;

        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF({
            orientation: width > height ? 'landscape' : 'portrait',
            unit: 'px',
            format: [width, height]
        });

        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, width, height);
        pdf.save(`${sanitizeFilename(state.title)}.pdf`);
        showToast('PDF document exported successfully!', 'success');
    } catch (err) {
        updateViewportTransform();
        console.error('PDF Export failed', err);
        showToast('PDF export failed.', 'error');
    }
}

function exportToSvg() {
    showToast('Exporting SVG...');
    try {
        const connectionsSvg = document.getElementById('connectionsSvg');
        const nodes = flattenAllVisibleNodes(state.root);

        let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
        nodes.forEach(n => {
            const w = (n.width || 120) / 2;
            const h = (n.height || 42) / 2;
            minX = Math.min(minX, n.x - w);
            maxX = Math.max(maxX, n.x + w);
            minY = Math.min(minY, n.y - h);
            maxY = Math.max(maxY, n.y + h);
        });

        const padding = 60;
        const width = (maxX - minX) + padding * 2;
        const height = (maxY - minY) + padding * 2;
        const offsetX = -minX + padding;
        const offsetY = -minY + padding;

        const isDarkMode = document.body.classList.contains('dark-mode');
        const bgFill = isDarkMode ? '#090d16' : '#ffffff';
        const textFill = isDarkMode ? '#f8fafc' : '#0f172a';
        const cardFill = isDarkMode ? '#1e293b' : '#ffffff';
        const cardBorder = isDarkMode ? '#334155' : '#e2e8f0';

        let svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" style="background-color: ${bgFill}; font-family: 'Segoe UI', system-ui, sans-serif;">\n`;
        svgContent += `<rect width="100%" height="100%" fill="${bgFill}"/>\n`;

        // Render connection paths with offset
        svgContent += `<g transform="translate(${offsetX}, ${offsetY})">\n`;
        Array.from(connectionsSvg.children).forEach(path => {
            svgContent += `  <path d="${path.getAttribute('d')}" stroke="${path.getAttribute('stroke')}" stroke-width="${path.getAttribute('stroke-width')}" fill="none" stroke-linecap="round"/>\n`;
        });

        // Render node rectangles and text
        nodes.forEach(n => {
            const x = n.x - (n.width / 2);
            const y = n.y - (n.height / 2);
            const strokeColor = n.color || '#6366f1';
            svgContent += `  <rect x="${x}" y="${y}" width="${n.width}" height="${n.height}" rx="8" fill="${cardFill}" stroke="${cardBorder}" stroke-width="1.5"/>\n`;
            svgContent += `  <rect x="${x}" y="${y}" width="4" height="${n.height}" rx="2" fill="${strokeColor}"/>\n`;
            
            const sanitizedText = (n.text || '')
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
            svgContent += `  <text x="${x + 14}" y="${y + (n.height / 2) + 5}" fill="${textFill}" font-size="${n.id === state.root.id ? '15' : '13'}" font-weight="${n.id === state.root.id ? '700' : '500'}">${sanitizedText}</text>\n`;
        });

        svgContent += `</g>\n</svg>`;

        const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
        const link = document.createElement('a');
        link.download = `${sanitizeFilename(state.title)}.svg`;
        link.href = URL.createObjectURL(blob);
        link.click();
        showToast('Scalable SVG exported!', 'success');
    } catch (err) {
        console.error('SVG Export failed', err);
        showToast('SVG export failed.', 'error');
    }
}

function exportToJson() {
    const data = {
        app: 'MindFlow',
        version: 1,
        title: state.title,
        layout: state.layout,
        currentPalette: state.currentPalette,
        root: state.root
    };
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const link = document.createElement('a');
    link.download = `${sanitizeFilename(state.title)}.json`;
    link.href = URL.createObjectURL(blob);
    link.click();
    showToast('Mind map saved as .json file', 'success');
}

function exportToMarkdown() {
    function nodeToMd(node, depth = 0) {
        const indent = '  '.repeat(depth);
        let str = `${indent}- ${node.text || 'Untitled'}\n`;
        if (node.children) {
            node.children.forEach(c => {
                str += nodeToMd(c, depth + 1);
            });
        }
        return str;
    }

    let mdStr = `# ${state.title}\n\n`;
    if (state.root) {
        mdStr += `- **${state.root.text}**\n`;
        if (state.root.children) {
            state.root.children.forEach(c => {
                mdStr += nodeToMd(c, 1);
            });
        }
    }

    const blob = new Blob([mdStr], { type: 'text/markdown' });
    const link = document.createElement('a');
    link.download = `${sanitizeFilename(state.title)}.md`;
    link.href = URL.createObjectURL(blob);
    link.click();
    showToast('Markdown outline exported!', 'success');
}

// Import Markdown parser
function parseMarkdownOutline(text) {
    const lines = text.split(/\r?\n/).filter(line => line.trim().length > 0);
    if (lines.length === 0) return null;

    let rootTitle = 'Imported Mind Map';
    let startIndex = 0;

    // Check for # Title header
    if (lines[0].startsWith('# ')) {
        rootTitle = lines[0].replace(/^#\s+/, '').trim();
        startIndex = 1;
    }

    const root = {
        id: 'root',
        text: rootTitle,
        color: '#6366f1',
        children: []
    };

    const stack = [{ node: root, depth: -1 }];

    for (let i = startIndex; i < lines.length; i++) {
        const line = lines[i];
        // Calculate indent depth (count leading spaces or tabs)
        const matchIndent = line.match(/^(\s*)/);
        const leading = matchIndent ? matchIndent[1] : '';
        const depth = leading.replace(/\t/g, '  ').length / 2;

        const cleanText = line.replace(/^\s*[-*+]\s*/, '').replace(/^#+\s*/, '').trim();
        if (!cleanText) continue;

        const newNode = {
            id: generateId(),
            text: cleanText,
            color: '#3b82f6',
            children: []
        };

        // Pop stack until parent depth is lower
        while (stack.length > 1 && stack[stack.length - 1].depth >= depth) {
            stack.pop();
        }

        const parent = stack[stack.length - 1].node;
        if (!parent.children) parent.children = [];
        parent.children.push(newNode);
        stack.push({ node: newNode, depth });
    }

    // Assign colors from palette to top branches
    const palette = PALETTES[state.currentPalette] || PALETTES.vibrant;
    root.children.forEach((c, i) => {
        assignBranchColor(c, palette[i % palette.length]);
    });

    return { title: rootTitle, root };
}

function handleJsonImport(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            if (!data.root) throw new Error('Invalid mind map JSON: missing root');

            state.title = data.title || 'Imported Mind Map';
            state.root = data.root;
            state.layout = data.layout || 'balanced';
            state.currentPalette = data.currentPalette || 'vibrant';
            state.selectedId = state.root.id;

            document.getElementById('mapTitleInput').value = state.title;
            updateLayoutDropdownUI();
            updatePaletteUI();
            pushState();
            renderMindMap();
            fitToScreen();
            showToast('Mind map imported successfully!', 'success');
        } catch (err) {
            console.error('JSON Import failed', err);
            showToast('Failed to import JSON file. Please ensure it is a valid format.', 'error');
        }
    };
    reader.readAsText(file);
}

function sanitizeFilename(name) {
    return (name || 'mindmap').replace(/[/\\?%*:|"<>]/g, '-').trim();
}

// ==========================================================================
// 11. Local Storage Auto-save & Restore
// ==========================================================================
function autoSave() {
    const saveBadge = document.getElementById('saveStatus');
    saveBadge.textContent = 'Saving...';

    const data = {
        title: state.title,
        root: state.root,
        layout: state.layout,
        currentPalette: state.currentPalette
    };

    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        setTimeout(() => {
            saveBadge.textContent = 'Auto-saved';
        }, 300);
    } catch (e) {
        console.warn('LocalStorage save failed', e);
        saveBadge.textContent = 'Save failed';
    }
}

function restoreFromStorage() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
            const data = JSON.parse(raw);
            if (data.root) {
                state.title = data.title || 'My Mind Map';
                state.root = data.root;
                state.layout = data.layout || 'balanced';
                state.currentPalette = data.currentPalette || 'vibrant';
                state.selectedId = state.root.id;
                document.getElementById('mapTitleInput').value = state.title;
                updateLayoutDropdownUI();
                updatePaletteUI();
                return true;
            }
        }
    } catch (e) {
        console.warn('LocalStorage restore error', e);
    }
    return false;
}

// ==========================================================================
// 12. UI Toast Notifications & Modals
// ==========================================================================
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;

    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        toast.style.transition = 'all 0.25s ease';
        setTimeout(() => toast.remove(), 250);
    }, 2500);
}

function openModal(modalId) {
    closeAllDropdowns();
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('hidden');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('hidden');
}

function openContextMenu(x, y, node) {
    closeAllDropdowns();
    const menu = document.getElementById('nodeContextMenu');
    if (!menu) return;

    const menuWidth = 190;
    const menuHeight = 220;
    const posX = Math.min(x, window.innerWidth - menuWidth - 10);
    const posY = Math.min(y, window.innerHeight - menuHeight - 10);

    menu.style.left = `${posX}px`;
    menu.style.top = `${posY}px`;
    menu.classList.remove('hidden');

    const swatchContainer = document.getElementById('ctxColors');
    if (swatchContainer) {
        swatchContainer.querySelectorAll('.color-swatch').forEach(swatch => {
            swatch.onclick = (e) => {
                e.stopPropagation();
                node.color = swatch.dataset.color;
                pushState();
                renderMindMap();
                closeContextMenu();
                showToast('Branch color updated');
            };
        });
    }
}

function closeContextMenu() {
    const menu = document.getElementById('nodeContextMenu');
    if (menu) menu.classList.add('hidden');
}

function closeAllDropdowns() {
    document.querySelectorAll('.dropdown-menu').forEach(el => el.classList.remove('show'));
    closeContextMenu();
}

// ==========================================================================
// 13. Initialization & Event Listeners
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme setup (Dark / Light)
    const savedTheme = localStorage.getItem(THEME_KEY) || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
    }

    document.getElementById('themeToggleBtn').addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode', !isDark);
        localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
        showToast(isDark ? 'Dark theme enabled' : 'Light theme enabled');
    });

    // 2. Load map or default template
    if (!restoreFromStorage()) {
        const defaultTpl = TEMPLATES['brainstorming'];
        state.title = defaultTpl.title;
        state.root = deepClone(defaultTpl.root);
        state.selectedId = state.root.id;
        document.getElementById('mapTitleInput').value = state.title;
    }

    // 3. Setup canvas & viewport
    initCanvasPanZoom();
    recenterCanvas();
    pushState();
    renderMindMap();
    setTimeout(fitToScreen, 150);

    // 4. Map title rename
    const titleInput = document.getElementById('mapTitleInput');
    titleInput.addEventListener('change', () => {
        state.title = titleInput.value.trim() || 'Untitled Mind Map';
        pushState();
    });

    // 5. Node manipulation buttons
    document.getElementById('addChildBtn').addEventListener('click', addChildNode);
    document.getElementById('addSiblingBtn').addEventListener('click', addSiblingNode);
    document.getElementById('deleteNodeBtn').addEventListener('click', deleteSelectedNode);
    document.getElementById('undoBtn').addEventListener('click', undo);
    document.getElementById('redoBtn').addEventListener('click', redo);

    // 6. Floating Zoom Controls
    document.getElementById('zoomInBtn').addEventListener('click', () => {
        const container = document.getElementById('canvasContainer');
        const rect = container.getBoundingClientRect();
        setZoom(state.zoom * 1.2, rect.width / 2, rect.height / 2);
    });

    document.getElementById('zoomOutBtn').addEventListener('click', () => {
        const container = document.getElementById('canvasContainer');
        const rect = container.getBoundingClientRect();
        setZoom(state.zoom * 0.8, rect.width / 2, rect.height / 2);
    });

    document.getElementById('zoomResetBtn').addEventListener('click', recenterCanvas);
    document.getElementById('fitViewBtn').addEventListener('click', fitToScreen);
    document.getElementById('centerViewBtn').addEventListener('click', recenterCanvas);

    // 7. Dropdown toggles
    function setupDropdown(triggerId, menuId) {
        const trigger = document.getElementById(triggerId);
        const menu = document.getElementById(menuId);
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = menu.classList.contains('show');
            closeAllDropdowns();
            if (!isOpen) menu.classList.add('show');
        });
    }

    setupDropdown('paletteBtn', 'paletteDropdown');
    setupDropdown('layoutBtn', 'layoutDropdown');
    setupDropdown('exportBtn', 'exportDropdown');
    setupDropdown('importBtn', 'importDropdown');

    window.addEventListener('click', closeAllDropdowns);

    // 8. Palette options
    document.querySelectorAll('.theme-option').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            applyColorPalette(btn.dataset.palette);
        });
    });

    // Selected node color swatches
    document.querySelectorAll('.color-swatch').forEach(swatch => {
        swatch.addEventListener('click', (e) => {
            e.stopPropagation();
            const color = swatch.dataset.color;
            const selected = findNodeById(state.root, state.selectedId);
            if (selected) {
                selected.color = color;
                pushState();
                renderMindMap();
                updateSelectedNodeSwatchUI();
                showToast('Node color updated');
            }
        });
    });

    // 9. Layout mode switcher
    document.querySelectorAll('#layoutDropdown .menu-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            state.layout = btn.dataset.layout;
            updateLayoutDropdownUI();
            closeAllDropdowns();
            pushState();
            renderMindMap();
            fitToScreen();
            showToast(`Switched layout to ${btn.querySelector('span').textContent}`);
        });
    });

    // 10. Search event listeners
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => performSearch(e.target.value));
    document.getElementById('searchNextBtn').addEventListener('click', nextSearchMatch);
    document.getElementById('searchPrevBtn').addEventListener('click', prevSearchMatch);

    // 11. Templates Modal
    document.getElementById('templatesBtn').addEventListener('click', () => openModal('templatesModal'));
    document.querySelectorAll('.template-item').forEach(item => {
        item.addEventListener('click', () => {
            const key = item.dataset.template;
            const tpl = TEMPLATES[key];
            if (tpl) {
                state.title = tpl.title;
                state.root = deepClone(tpl.root);
                state.selectedId = state.root.id;
                document.getElementById('mapTitleInput').value = state.title;
                closeModal('templatesModal');
                pushState();
                renderMindMap();
                fitToScreen();
                showToast(`Loaded template: ${tpl.title}`, 'success');
            }
        });
    });

    // 12. Export actions
    document.getElementById('exportPngBtn').addEventListener('click', () => {
        closeAllDropdowns();
        exportToPng();
    });
    document.getElementById('exportSvgBtn').addEventListener('click', () => {
        closeAllDropdowns();
        exportToSvg();
    });
    document.getElementById('exportPdfBtn').addEventListener('click', () => {
        closeAllDropdowns();
        exportToPdf();
    });
    document.getElementById('exportJsonBtn').addEventListener('click', () => {
        closeAllDropdowns();
        exportToJson();
    });
    document.getElementById('exportMdBtn').addEventListener('click', () => {
        closeAllDropdowns();
        exportToMarkdown();
    });

    // 13. Import actions
    const jsonFileInput = document.getElementById('jsonFileInput');
    document.getElementById('importJsonBtn').addEventListener('click', () => {
        closeAllDropdowns();
        jsonFileInput.click();
    });
    jsonFileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            handleJsonImport(e.target.files[0]);
            jsonFileInput.value = '';
        }
    });

    document.getElementById('importMdBtn').addEventListener('click', () => {
        closeAllDropdowns();
        openModal('importMdModal');
    });

    document.getElementById('submitImportMdBtn').addEventListener('click', () => {
        const text = document.getElementById('importMdTextarea').value;
        const parsed = parseMarkdownOutline(text);
        if (parsed) {
            state.title = parsed.title;
            state.root = parsed.root;
            state.selectedId = state.root.id;
            document.getElementById('mapTitleInput').value = state.title;
            closeModal('importMdModal');
            pushState();
            renderMindMap();
            fitToScreen();
            showToast('Markdown converted to mind map!', 'success');
        } else {
            showToast('Please paste a valid markdown outline.', 'error');
        }
    });

    document.getElementById('resetMapBtn').addEventListener('click', () => {
        closeAllDropdowns();
        if (confirm('Start a new blank mind map? Your current map will be reset.')) {
            const blank = TEMPLATES['blank'];
            state.title = 'New Mind Map';
            state.root = deepClone(blank.root);
            state.selectedId = state.root.id;
            document.getElementById('mapTitleInput').value = state.title;
            pushState();
            renderMindMap();
            recenterCanvas();
            showToast('Started new blank map');
        }
    });

    // Context Menu Item Actions
    document.getElementById('ctxAddChild').addEventListener('click', (e) => {
        e.stopPropagation();
        closeContextMenu();
        addChildNode();
    });
    document.getElementById('ctxAddSibling').addEventListener('click', (e) => {
        e.stopPropagation();
        closeContextMenu();
        addSiblingNode();
    });
    document.getElementById('ctxEdit').addEventListener('click', (e) => {
        e.stopPropagation();
        closeContextMenu();
        const node = findNodeById(state.root, state.selectedId);
        const card = document.getElementById(`node-${state.selectedId}`);
        if (node && card) {
            const textSpan = card.querySelector('.node-text');
            if (textSpan) startInlineEditing(node, textSpan, card);
        }
    });
    document.getElementById('ctxCollapse').addEventListener('click', (e) => {
        e.stopPropagation();
        closeContextMenu();
        const node = findNodeById(state.root, state.selectedId);
        if (node && node.children && node.children.length > 0) {
            node.collapsed = !node.collapsed;
            pushState();
            renderMindMap();
        }
    });
    document.getElementById('ctxDelete').addEventListener('click', (e) => {
        e.stopPropagation();
        closeContextMenu();
        deleteSelectedNode();
    });

    // 14. Shortcuts Modal
    document.getElementById('shortcutsBtn').addEventListener('click', () => openModal('shortcutsModal'));

    // Modal Close Buttons
    document.querySelectorAll('.modal-close-btn, .modal-cancel-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal-overlay').classList.add('hidden');
        });
    });

    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.add('hidden');
        });
    });

    // 15. Global Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
        // If typing in input or textarea, skip global shortcuts (except Esc / Enter)
        const isEditing = e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA';

        if (e.key === 'Escape') {
            document.querySelectorAll('.modal-overlay').forEach(m => m.classList.add('hidden'));
            closeAllDropdowns();
            return;
        }

        if (isEditing) return;

        if (e.key === 'Tab') {
            e.preventDefault();
            addChildNode();
        } else if (e.key === 'Enter') {
            e.preventDefault();
            addSiblingNode();
        } else if (e.key === 'Delete' || e.key === 'Backspace') {
            e.preventDefault();
            deleteSelectedNode();
        } else if (e.key === 'F2') {
            e.preventDefault();
            const node = findNodeById(state.root, state.selectedId);
            const card = document.getElementById(`node-${state.selectedId}`);
            if (node && card) {
                const textSpan = card.querySelector('.node-text');
                if (textSpan) startInlineEditing(node, textSpan, card);
            }
        } else if ((e.ctrlKey || e.metaKey) && (e.key === 'z' || e.key === 'Z')) {
            e.preventDefault();
            if (e.shiftKey) redo();
            else undo();
        } else if ((e.ctrlKey || e.metaKey) && (e.key === 'y' || e.key === 'Y')) {
            e.preventDefault();
            redo();
        } else if ((e.ctrlKey || e.metaKey) && (e.key === 'f' || e.key === 'F')) {
            e.preventDefault();
            document.getElementById('searchInput').focus();
        } else if (e.key.startsWith('Arrow')) {
            e.preventDefault();
            navigateTree(e.key);
        } else if (e.key === '?') {
            e.preventDefault();
            openModal('shortcutsModal');
        }
    });

    // Resize window
    window.addEventListener('resize', () => {
        renderMindMap();
    });
});
