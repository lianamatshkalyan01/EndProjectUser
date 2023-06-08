import Category from '../../Components/Category/Category'
import { Calendar, theme } from 'antd';
import type { CalendarMode } from 'antd/es/calendar/generateCalendar';
import type { Dayjs } from 'dayjs';
import React, { useState } from 'react';
import { Transfer, Tree} from 'antd';
import type { TransferDirection, TransferItem } from 'antd/es/transfer';
import type { DataNode } from 'antd/es/tree';

const onPanelChange = (value: Dayjs, mode: CalendarMode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  interface TreeTransferProps {
    dataSource: DataNode[];
    targetKeys: string[];
    onChange: (targetKeys: string[], direction: TransferDirection, moveKeys: string[]) => void;
  }
  
  // Customize Table Transfer
  const isChecked = (selectedKeys: (string | number)[], eventKey: string | number) =>
    selectedKeys.includes(eventKey);
  
  const generateTree = (treeNodes: DataNode[] = [], checkedKeys: string[] = []): DataNode[] =>
    treeNodes.map(({ children, ...props }) => ({
      ...props,
      disabled: checkedKeys.includes(props.key as string),
      children: generateTree(children, checkedKeys),
    }));
  
  const TreeTransfer = ({ dataSource, targetKeys, ...restProps }: TreeTransferProps) => {
    const { token } = theme.useToken();
  
    const transferDataSource: TransferItem[] = [];
    function flatten(list: DataNode[] = []) {
      list.forEach((item) => {
        transferDataSource.push(item as TransferItem);
        flatten(item.children);
      });
    }
    flatten(dataSource);
  
    return (
      <Transfer
        {...restProps}
        targetKeys={targetKeys}
        dataSource={transferDataSource}
        className="tree-transfer"
        render={(item) => item.title!}
        showSelectAll={false}
      >
        {({ direction, onItemSelect, selectedKeys }) => {
          if (direction === 'left') {
            const checkedKeys = [...selectedKeys, ...targetKeys];
            return (
              <div style={{ padding: token.paddingXS }}>
                <Tree
                  blockNode
                  checkable
                  checkStrictly
                  defaultExpandAll
                  checkedKeys={checkedKeys}
                  treeData={generateTree(dataSource, targetKeys)}
                  onCheck={(_, { node: { key } }) => {
                    onItemSelect(key as string, !isChecked(checkedKeys, key));
                  }}
                  onSelect={(_, { node: { key } }) => {
                    onItemSelect(key as string, !isChecked(checkedKeys, key));
                  }}
                />
              </div>
            );
          }
        }}
      </Transfer>
    );
  };
  
  const treeData: DataNode[] = [
    {
      key: '0-1',
      title: 'BOOM',
      children: [
        { key: '0-1-0', title: 'Heinz milk porridge "Whole grain" 3 cereals (6 months+) 180 g  1020AMD' },
        { key: '0-1-1', title: 'Heinz porridge dairy-free I am big oatmeal 200 g 1020AMD' },
        { key: '0-1-2', title: 'Biolane baby shampoo (0+) 350 ml 5550AMD' },
        { key: '0-1-3', title: 'Heinz Puree apple (4 months +) 100 g 295AMD' },
      ],
    },
    {
        key: '0-2',
        title: 'Best Price',
        children: [
          { key: '0-2-0', title: 'Magnetab 3500AMD' },
          { key: '0-2-1', title: 'Dexalgin 25 mg 1830AMD' },
          { key: '0-2-2', title: 'Concor 5 mg 2550AMD' },
          { key: '0-2-3', title: 'Maksilak 3700AMD' },
        ],
      },
      {
        key: '0-3',
        title: 'Seasonal offers',
        children: [
          { key: '0-3-0', title: 'Flavamed 30 mg 1250AMD' },
          { key: '0-3-1', title: 'Kagocel 12 mg 2100AMD' },
          { key: '0-3-2', title: 'Mig 400 mg 590 AMD' },
          { key: '0-3-3', title: 'GummiKing vegan multivitamins and minerals 9370AMD' },
        ],
      }
  ];

export default function User() {
    const { token } = theme.useToken();

  const wrapperStyle: React.CSSProperties = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
    marginLeft:"7%",
    marginRight:"2%",
    marginTop:"2%",
    marginBottom:"2%",
  };

  const [targetKeys, setTargetKeys] = useState<string[]>([]);
  const onChange = (keys: string[]) => {
    setTargetKeys(keys);
  };

  return (
    <div>
    <div style={{display:"flex", marginRight:"5%", marginLeft:"5%", backgroundColor:"rgb(255,248,220", borderRadius:"10px"}}>
    <div style={{width:"90%", marginTop:"3%", marginLeft:"2%"}}>
    <TreeTransfer dataSource={treeData} targetKeys={targetKeys} onChange={onChange} />
    </div>
    <div style={wrapperStyle}>
      <Calendar fullscreen={false} onPanelChange={onPanelChange} />
    </div>
    </div>
    <Category />
    </div>
  )
}

