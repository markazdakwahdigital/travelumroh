import React,{createContext,useContext,useEffect,useState} from 'react';
const UIContext=createContext(null);
export function UIProvider({children}){const [query,setQuery]=useState('');const [toast,setToast]=useState('');
useEffect(()=>{if(!toast)return;const t=setTimeout(()=>setToast(''),2600);return()=>clearTimeout(t)},[toast]);
return <UIContext.Provider value={{query,setQuery,notify:setToast}}>{children}{toast&&<div className="toast" role="status">{toast}</div>}</UIContext.Provider>}
export const useUI=()=>useContext(UIContext);