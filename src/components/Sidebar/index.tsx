import React from 'react';
import {
  Home,
  PieChart,
  Tool,
  HelpCircle,
  ChevronRight,
  DollarSign,
  TrendingUp,
  Grid,
  ThumbsUp,
  BookOpen,
} from 'react-feather';

import { SidebarContainer, SidebarComponent } from './styles';

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <SidebarComponent>
        <Home size={20} />
        <PieChart size={20} />
        <TrendingUp size={20} />
        <DollarSign size={20} />
        <ThumbsUp size={20} />
        <Grid size={20} />
        <BookOpen size={20} />
        <Tool size={20} />
        <HelpCircle size={20} />
        <span>
          <ChevronRight size={25} />
        </span>
      </SidebarComponent>
    </SidebarContainer>
  );
};
export default Sidebar;
