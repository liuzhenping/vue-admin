/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Font from '@ckeditor/ckeditor5-font/src/font';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import List from '@ckeditor/ckeditor5-list/src/list';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload'
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import Link from '@ckeditor/ckeditor5-link/src/link';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';

export default class ClassicEditor extends ClassicEditorBase {
}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
    Autoformat, TextTransformation, PasteFromOffice,
    Bold, Italic, Underline, Strikethrough, Code,
    Indent, IndentBlock,
    Paragraph, Heading,
    Font, Highlight, List,
    BlockQuote, CodeBlock, HorizontalLine,
    Image, ImageToolbar, ImageStyle, ImageResize, ImageUpload, CKFinder,
    Link, RemoveFormat, Alignment, TodoList, Essentials
];

// Editor configuration.
ClassicEditor.defaultConfig = {
    toolbar: {
        items: [
            'heading', '|',
            'bold', 'italic', 'underline', 'strikethrough', '|',
            'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor', 'highlight', '|',
            'outdent', 'indent', 'alignment:left', 'alignment:right', 'alignment:center', '|',
            'bulletedList', 'numberedList', 'todoList', '|',
            'link', 'blockQuote', 'horizontalLine', '|',
            'imageUpload', 'code', 'codeBlock', '|',
            'removeFormat', 'undo', 'redo'
        ]
    },
    heading: {
        options: [
            {model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph'},
            {model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1'},
            {model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2'},
            {model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3'}
        ]
    },
    fontSize: {
        options: [8, 9, 10, 11, 12, 'default', 14, 16, 18, 20, 22, 24, 26, 28, 36],
    },
    highlight: [
        {
            model: 'yellowMarker',
            class: 'marker-yellow',
            title: 'Yellow Marker',
            color: 'var(--ck-highlight-marker-yellow)',
            type: 'marker'
        },
        {
            model: 'greenMarker',
            class: 'marker-green',
            title: 'Green marker',
            color: 'var(--ck-highlight-marker-green)',
            type: 'marker'
        },
        {
            model: 'pinkMarker',
            class: 'marker-pink',
            title: 'Pink marker',
            color: 'var(--ck-highlight-marker-pink)',
            type: 'marker'
        },
        {
            model: 'blueMarker',
            class: 'marker-blue',
            title: 'Blue marker',
            color: 'var(--ck-highlight-marker-blue)',
            type: 'marker'
        },
        {model: 'redPen', class: 'pen-red', title: 'Red pen', color: 'var(--ck-highlight-pen-red)', type: 'pen'},
        {model: 'greenPen', class: 'pen-green', title: 'Green pen', color: 'var(--ck-highlight-pen-green)', type: 'pen'}
    ],
    indentBlock: {
        offset: 2, unit: 'em'
    },
    codeBlock :{
        languages: [
            { language: 'plaintext', label: 'Plain text' }, // The default language.
            { language: 'c', label: 'C' ,class: 'hljs' },
            { language: 'cs', label: 'C#' ,class: 'hljs' },
            { language: 'cpp', label: 'C++' ,class: 'hljs' },
            { language: 'css', label: 'CSS' ,class: 'hljs' },
            { language: 'diff', label: 'Diff' ,class: 'hljs' },
            { language: 'xml', label: 'HTML/XML' ,class: 'hljs' },
            { language: 'sql', label: 'SQL' ,class: 'hljs' },
            { language: 'java', label: 'Java' ,class: 'hljs' },
            { language: 'javascript', label: 'JavaScript' ,class: 'hljs' },
            { language: 'php', label: 'PHP' ,class: 'hljs' },
            { language: 'python', label: 'Python' ,class: 'hljs' },
            { language: 'ruby', label: 'Ruby' ,class: 'hljs' },
            { language: 'typescript', label: 'TypeScript' ,class: 'hljs' },
        ]
    },
    image: {
        toolbar: ['imageStyle:full', 'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight'],
        styles: ['full', 'alignLeft', 'alignCenter', 'alignRight']
    },
    ckfinder: {
        //后端处理上传逻辑返回json数据,包括uploaded(选项true/false)和url两个字段
        //uploadUrl: '/api/image/upload'
    },
    placeholder: "输入文章内容"
};