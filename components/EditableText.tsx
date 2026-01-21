import React, { useState, useEffect } from 'react';
import { TextElementTag } from '../types';
import { Pencil } from 'lucide-react';

interface EditableTextProps {
  storageKey: string;
  initialValue: string;
  isEditing: boolean;
  tag: TextElementTag;
  className?: string;
  placeholder?: string;
}

const EditableText: React.FC<EditableTextProps> = ({
  storageKey,
  initialValue,
  isEditing,
  tag,
  className = "",
  placeholder = "Escribe aquí..."
}) => {
  const [value, setValue] = useState(initialValue);

  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      setValue(saved);
    }
  }, [storageKey]);

  // Save to local storage on change
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    localStorage.setItem(storageKey, newValue);
  };

  if (isEditing) {
    const inputClasses = `w-full bg-slate-800/50 border border-indigo-500/50 rounded p-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${className}`;
    
    if (tag === 'p' || tag === 'ul' || tag === 'li') {
       return (
        <textarea
          value={value}
          onChange={handleChange}
          className={inputClasses}
          rows={4}
          placeholder={placeholder}
        />
      );
    }
    
    return (
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className={inputClasses}
        placeholder={placeholder}
      />
    );
  }

  // Render Display Mode
  switch (tag) {
    case 'h1':
      return <h1 className={className}>{value}</h1>;
    case 'h2':
      return <h2 className={className}>{value}</h2>;
    case 'h3':
      return <h3 className={className}>{value}</h3>;
    case 'code':
      return <code className={className}>{value}</code>;
    case 'li':
      return <li className={className}>{value}</li>;
    default:
      return <p className={className} dangerouslySetInnerHTML={{__html: value.replace(/\n/g, '<br/>')}} />;
  }
};

export default EditableText;