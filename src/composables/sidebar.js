import { computed } from 'vue'
import {useState} from "../composables/state";

export const [isCollapsed, setCollapsed] = useState(true);
export const toggleSidebar = () => setCollapsed(!isCollapsed.value);

export const SIDEBAR_WIDTH = 16
export const SIDEBAR_WIDTH_COLLAPSED = 0
export const sidebarWidth = computed(
    () => `${isCollapsed.value ? SIDEBAR_WIDTH : SIDEBAR_WIDTH_COLLAPSED}rem`
)