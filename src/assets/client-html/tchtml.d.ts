/**
 *
 * @privateRemarks This file is the TC-HTML Public API declaration and type definitions file. It can be used with Typescript
 * to provide type checking and intellisense.
 *
 * HTML Client public API.
 *
 * @packageDocumentation
 */


/**
 * @public
 */
export declare type ActionAllowChecker = (targetNode: INode, selectedNodes: INode[], actionProperties: IActionProperties) => boolean;

/**
 * Enumeration that denotes all available action types.
 *
 * @public
 */
export declare enum ActionType {
    /**
     * @public
     */
    APPEND_NEW_DOCUMENT = 0,
    /**
     * @public
     */
    APPEND_NEW_FOLDER = 1,
    /**
     * @public
     */
    CCT_CONNECT_DISCONNECT = 2,
    /**
     * @public
     */
    CCT_RECONNECT = 3,
    /**
     * @public
     */
    RANGER_CONNECT_DISCONNECT = 4,
    /**
     * @public
     */
    RANGER_RECONNECT = 5,
    /**
     * @public
     */
    NEW_BATCH_ACTION = 6,
    /**
     * @public
     */
    DELETE_BATCH_ACTION = 7,
    /**
     * @public
     */
    OPEN_BATCH_ACTION = 8,
    /**
     * @public
     */
    OPEN_NEXT_BATCH_TO_INDEX_ACTION = 9,
    /**
     * @public
     */
    SELECT_BATCH_TO_INDEX_ACTION = 10,
    /**
     * @public
     */
    SUSPEND_BATCH_ACTION = 11,
    /**
     * @public
     */
    CLOSE_BATCH_ACTION = 12,
    /**
     * @public
     */
    DISCARD_BATCH_ACTION = 13,
    /**
     * @public
     */
    NEW_DOCUMENT_BEFORE = 14,
    /**
     * @public
     */
    NEW_DOCUMENT_AFTER = 15,
    /**
     * @public
     */
    NEW_FOLDER_BEFORE = 16,
    /**
     * @public
     */
    NEW_FOLDER_AFTER = 17,
    /**
     * @public
     */
    CREATE_DOCUMENT_FROM_SELECTED_PAGES = 18,
    /**
     * @public
     */
    DELETE_SELECTED_NODES = 19,
    /**
     * @public
     */
    DUPLICATE_SELECTED_NODES = 20,
    /**
     * @public
     */
    MERGE_SELECTED_NODES = 21,
    /**
     * @public
     */
    MERGE_WITH_PREVIOUS_NODE = 22,
    /**
     * @public
     */
    MERGE_WITH_NEXT_NODE = 23,
    /**
     * @public
     */
    MOVE_NODES = 24,
    /**
     * @public
     */
    SPLIT_NODE = 25,
    /**
     * @public
     */
    NEW_DOCUMENT_IN_EMPTY_BATCH = 26,
    /**
     * @public
     */
    RASTERIZE_IMAGE = 27,
    /**
     * @public
     */
    UNDO_LAST_OPERATION = 28,
    /**
     * @public
     */
    RESTORE_ORIGINAL_IMAGE = 29,
    /**
     * @public
     */
    REDO_LAST_OPERATION = 30,
    /**
     * @public
     */
    INVERT_PAGE = 31,
    /**
     * @public
     */
    FLIP_PAGE = 32,
    /**
     * @public
     */
    DESPECKLE_PAGE = 33,
    /**
     * @public
     */
    ADJUST_BRIGHTNESS_CONTRAST = 34,
    /**
     * @public
     */
    EXTRACT_PAGES = 35,
    /**
     * @public
     */
    ROTATE_PAGE = 36,
    /**
     * @public
     */
    DESKEW_PAGE = 37,
    /**
     * @public
     */
    REMOVE_BLACK_BORDER = 38,
    /**
     * @public
     */
    FILL_PUNCH_HOLES = 39,
    /**
     * @public
     */
    DOWNLOAD_PDF_ACTION = 40,
    /**
     * @public
     */
    DOWNLOAD_MULTI_TIF_ACTION = 41,
    /**
     * @public
     */
    DOWNLOAD_EDOC = 42,
    /**
     * @public
     */
    SCAN_ALL_AND_APPEND = 43,
    /**
     * @public
     */
    SCAN_SINGLE_AND_APPEND = 44,
    /**
     * @public
     */
    SCAN_AND_REPLACE_PAGES = 45,
    /**
     * @public
     */
    SCAN_ALL_AND_INSERT = 46,
    /**
     * @public
     */
    SCAN_SINGLE_AND_INSERT = 47,
    /**
     * @public
     */
    IMPORT_DRAGGED_FILES = 48,
    /**
     * @public
     */
    API_IMPORT_DOCUMENT = 49,
    /**
     * @public
     */
    VIEW_PAGES = 50,
    /**
     * @public
     */
    DECRYPT_PAGES = 51,
    /**
     * @public
     */
    CHANGE_USER_OWN_PASSWORD = 52,
    /**
     * @public
     */
    EXIT = 53,
    /**
     * @public
     */
    OPEN_BATCH_FILTERING = 54,
    /**
     * @public
     */
    INDEXING_MODE = 55,
    /**
     * @public
     */
    IMPORT_PASTED_FILES = 56,
    /**
     * @public
     */
    SPLIT_NODE_EVERY_X = 57,
    /**
     * @public
     */
    APPEND_NEW_STACK = 58,
    /**
     * @public
     */
    NEW_STACK_BEFORE = 59,
    /**
     * @public
     */
    NEW_STACK_AFTER = 60,
    /**
     * @public
     */
    RUBBER_BAND_OCR = 61,
    /**
     * @public
     */
    EDIT_ANNOTATIONS = 62,
    /**
     * @public
     */
    EDIT_REDACTIONS = 63
}

/**
 * @public
 * @beta
 */
export declare enum AnnotationArrowOrientation {
    /**
     * @public
     * @beta
     */
    LEFT = "Left Arrow",
    /**
     * @public
     * @beta
     */
    UP = "Up Arrow",
    /**
     * @public
     * @beta
     */
    RIGHT = "Right Arrow",
    /**
     * @public
     * @beta
     */
    DOWN = "Down Arrow"
}

/**
 * @public
 * @beta
 */
export declare enum AnnotationTextAlignment {
    /**
     * @public
     * @beta
     */
    CENTER = 0,
    /**
     * @public
     * @beta
     */
    TOP = 1,
    /**
     * @public
     * @beta
     */
    LEFT = 2,
    /**
     * @public
     * @beta
     */
    BOTTOM = 3,
    /**
     * @public
     * @beta
     */
    RIGHT = 4
}

/**
 * author: kpentaris
 * date: 04-May-18
 */
/**
 * @public
 * @beta
 */
export declare enum AnnotationTextFontFamily {
    /**
     * @public
     * @beta
     */
    ARIAL = "Arial",
    /**
     * @public
     * @beta
     */
    SEGOE_UI = "Segoe UI",
    /**
     * @public
     * @beta
     */
    CALIBRI = "Calibri",
    /**
     * @public
     * @beta
     */
    VERDANA = "Verdana",
    /**
     * @public
     * @beta
     */
    TIMES_NEW_ROMAN = "Times New Roman",
    /**
     * @public
     * @beta
     */
    GARAMOND = "Garamond",
    /**
     * @public
     * @beta
     */
    COMIC_SANS_MS = "Comic Sans MS",
    /**
     * @public
     * @beta
     */
    COURIER_NEW = "Courier New",
    /**
     * @public
     * @beta
     */
    GEORGIA = "Georgia",
    /**
     * @public
     * @beta
     */
    LUCIDA_CONSOLE = "Lucida Console",
    /**
     * @public
     * @beta
     */
    TAHOMA = "Tahoma"
}

/**
 * Enumerates possible Bar Code orientations.
 *
 * @beta
 * @public
 */
export declare enum BarcodeOrientation {
    /**
     *
     * @public
     * @beta
     */
    All = 255,
    /**
     *
     * @public
     * @beta
     */
    BottomToTop = 8,
    /**
     *
     * @public
     * @beta
     */
    LeftToRight = 1,
    /**
     *
     * @public
     * @beta
     */
    RightToLeft = 2,
    /**
     *
     * @public
     * @beta
     */
    TopToBottom = 4,
    /**
     *
     * @public
     * @beta
     */
    Unknown = 0
}

/**
 * Utility functions to convert BarcodeOrientations from string to numbers
 * @internal
 */
export declare namespace BarcodeOrientation {
    
}

/**
 *
 * @beta
 * @public
 */
export declare enum BarcodeThresholdMode {
    /**
       *
     * @public
     * @beta
     */
    Automatic = "Automatic",
    /**
       *
     * @public
     * @beta
     */
    Fixed = "Fixed"
}

/**
 * Enumerates Bar Code types supported by ImageTrust.
 *
 * @beta
 * @public
 */
export declare enum BarcodeType {
    /**
     * @public
     * @beta
     */
    PatchT = "PatchT",
    /**
     * @public
     * @beta
     */
    Patch1 = "Patch1",
    /**
     * @public
     * @beta
     */
    Patch2 = "Patch2",
    /**
     * @public
     * @beta
     */
    Patch3 = "Patch3",
    /**
     * @public
     * @beta
     */
    Patch4 = "Patch4",
    /**
     * @public
     * @beta
     */
    Patch6 = "Patch6",
    /**
     * @public
     * @beta
     */
    Code_11 = "Code_11",
    /**
     * @public
     * @beta
     */
    Code_39 = "Code_39",
    /**
     * @public
     * @beta
     */
    Code_39_Extended = "Code_39_Extended",
    /**
     * @public
     * @beta
     */
    Code_93 = "Code_93",
    /**
     * @public
     * @beta
     */
    Code_128 = "Code_128",
    /**
     * @public
     * @beta
     */
    Interleaved_2of5 = "Interleaved_2of5",
    /**
     * @public
     * @beta
     */
    Codabar = "Codabar",
    /**
     * @public
     * @beta
     */
    EAN_8 = "EAN_8",
    /**
     * @public
     * @beta
     */
    EAN_13 = "EAN_13",
    /**
     * @public
     * @beta
     */
    UPC_A = "UPC_A",
    /**
     * @public
     * @beta
     */
    UPC_E = "UPC_E",
    /**
     * @public
     * @beta
     */
    Add_2 = "Add_2",
    /**
     * @public
     * @beta
     */
    Add_5 = "Add_5",
    /**
     * @public
     * @beta
     */
    Postnet = "Postnet",
    /**
     * @public
     * @beta
     */
    RM4SCC = "RM4SCC",
    /**
     * @public
     * @beta
     */
    PDF_417 = "PDF_417",
    /**
     * @public
     * @beta
     */
    DataMatrix = "DataMatrix",
    /**
     * @public
     * @beta
     */
    QR = "QR",
    /**
     * @public
     * @beta
     */
    QR_Micro = "QR_Micro",
    /**
     * @public
     * @beta
     */
    BT = "BT",
    /**
     * @public
     * @beta
     */
    Planet = "Planet",
    /**
     * @public
     * @beta
     */
    Australia_Post = "Australia_Post",
    /**
     * @public
     * @beta
     */
    IntelligentMail = "IntelligentMail",
    /**
     * @public
     * @beta
     */
    PharmaCode = "PharmaCode",
    /**
     * @public
     * @beta
     */
    UCC_128 = "UCC_128",
    /**
     * @public
     * @beta
     */
    RSS_14 = "RSS_14",
    /**
     * @public
     * @beta
     */
    RSS_Limited = "RSS_Limited",
    /**
     * @public
     * @beta
     */
    RSS_Expanded = "RSS_Expanded",
    /**
     * @public
     * @beta
     */
    MICR = "MICR"
}

/**
 *
 * @public
 * @beta
 */
export declare namespace BarcodeType {
    /**
     *  notexists
     *
     * @beta
     * @public
     */
    export function isPatch(type: BarcodeType): boolean;
}

export declare interface BatchClassSchema extends IndexClassSchema {
}

/**
 * Enumeration of request types executed by the application.
 *
 * @public
 */
export declare enum ClientRequestType {
    /**
     * Under Application we categorize all requests that the application performs in order to execute its tasks.
     *
     * @public
     */
    APPLICATION = 0,
    /**
     * Under Session we categorize requests related to session creation or deletion.
     *
     * @public
     */
    SESSION = 1,
    /**
     * Under Keep Alive we categorize heartbeat type requests that the application performs in order to keep the user session alive.
     *
     * @public
     */
    KEEP_ALIVE = 2,
    /**
     * Under Logging we categorize all requests that transport client logs to be written on the remote log file.
     *
     * @public
     */
    LOGGING = 3,
    /**
     * Under Scanner we categorize all requests that are directed to scanners or scanner related software.
     *
     * @public
     */
    SCANNER = 4,
    /**
     * Under Custom we categorize all requests that are directed to custom plugins.
     *
     * @public
     */
    CUSTOM = 5
}

/**
 * Interface of the object returned when customizing the search pane.
 *
 * @public
 */
declare interface CustomSearchOptions {
    availableSearchTypes: SearchType[];
    defaultSearchType: SearchType;
    predefinedPatterns?: NamedSearchPattern[];
    showIgnoreCase: boolean;
    defaultIgnoreCase: boolean;
    showMatchWord: boolean;
    defaultMatchWord: boolean;
}

export declare interface DocumentClassSchema extends IndexClassSchema {
    formTypes: Array<FormTypeSchema>;
    name: string;
}

export declare enum FieldDataTypeSchema {
    CHAR = 0,
    INTEGER = 1,
    DOUBLE = 2,
    DATE = 3,
    TIME = 4,
    DATETIME = 5,
    TIMESTAMP = 6
}

export declare interface FieldSchema {
    name: string;
    displayLabel?: string;
    required?: boolean;
    hidden?: boolean;
    readOnly?: boolean;
    displayTip?: string;
    defaultValue?: string;
    type: FieldTypeSchema;
    fieldTypeName: string;
    valueColIdx?: number;
    descrColIdx?: number;
    filterColIdx?: number;
    filterFieldNameRef?: string;
}

export declare interface FieldTypeSchema {
    name: string;
    dataType: FieldDataTypeSchema;
    dateTimePattern?: string;
    length?: number;
    list?: boolean;
    strict?: boolean;
    values?: Array<ListItemSchema>;
}

/**
 * This enum matches the FileType.MimeType enum in Java. Make sure you change both at the same time
 *
 * @public
 * @beta
 */
export declare enum FileMimeType {
    /**
     * @public
     * @beta
     */
    DEFAULT = "application/octet-stream",
    /**
     * @public
     * @beta
     */
    TXT = "text/plain",
    /**
     * @public
     * @beta
     */
    XML = "application/xml",
    /**
     * @public
     * @beta
     */
    DOCX = "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    /**
     * @public
     * @beta
     */
    DOC = "application/msword",
    /**
     * @public
     * @beta
     */
    XLSX = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    /**
     * @public
     * @beta
     */
    XLS = "application/vnd.ms-excel",
    /**
     * @public
     * @beta
     */
    PPTX = "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    /**
     * @public
     * @beta
     */
    PPT = "application/vnd.ms-powerpoint",
    /**
     * @public
     * @beta
     */
    VSD = "application/vnd.visio",
    /**
     * @public
     * @beta
     */
    VSDX = "application/vnd.visio2013",
    /**
     * @public
     * @beta
     */
    MSG = "application/vnd.ms-outlook",
    /**
     * The OLECF file type can represent many Microsoft types including:
     *  - .doc
     *  - .ppt
     *  - .xls
     *  - .msi
     * @type \{string\}
     *
     * @public
     * @beta
     */
    OLECF = "application/",
    /**
     * @public
     * @beta
     */
    ZIP = "application/zip",
    /**
     * @public
     * @beta
     */
    GZIP = "application/gzip",
    /**
     * @public
     * @beta
     */
    LZMA_7Z = "application/x-7z-compressed",
    /**
     * @public
     * @beta
     */
    EPUB = "application/epub+zip",
    /**
     * @public
     * @beta
     */
    XPI_ZIP_FILENAME = "application/x-xpinstall",
    /**
     * @public
     * @beta
     */
    ODT = "application/vnd.oasis.opendocument.text",
    /**
     * @public
     * @beta
     */
    ODS = "application/vnd.oasis.opendocument.spreadsheet",
    /**
     * @public
     * @beta
     */
    ODP = "application/vnd.oasis.opendocument.presentation",
    /**
     * @public
     * @beta
     */
    JPEG = "image/jpeg",
    /**
     * @public
     * @beta
     */
    JP2 = "image/jp2",
    /**
     * @public
     * @beta
     */
    PDF = "application/pdf",
    /**
     * @public
     * @beta
     */
    TIF = "image/tiff",
    /**
     * @public
     * @beta
     */
    PNG = "image/png",
    /**
     * @public
     * @beta
     */
    GIF = "image/gif",
    /**
     * @public
     * @beta
     */
    BMP = "image/bmp",
    /**
     * @public
     * @beta
     */
    ICO = "image/vnd.microsoft.icon",
    /**
     * @public
     * @beta
     */
    WEBP = "image/webp",
    /**
     * @public
     * @beta
     */
    FLIF = "image/flif",
    /**
     * @public
     * @beta
     */
    X_CANON_CR2 = "image/x-canon-cr2",
    /**
     * @public
     * @beta
     */
    JXR = "image/vnd.ms-photo",
    /**
     * @public
     * @beta
     */
    PSD = "image/vnd.adobe.photoshop",
    /**
     * The EXE file type can represent many types including:
     *  - .exe
     *  - .dll
     * @type \{string\}
     *
     * @public
     * @beta
     */
    EXE = "application/x-msdownload",
    /**
     * @public
     * @beta
     */
    RTF = "application/rtf",
    /**
     * @public
     * @beta
     */
    AVI = "video/x-msvideo",
    /**
     * @public
     * @beta
     */
    WAV = "audio/x-wav",
    /**
     * @public
     * @beta
     */
    QCELP = "audio/qcelp",
    /**
     * @public
     * @beta
     */
    MP4 = "video/mp4",
    /**
     * @public
     * @beta
     */
    MIDI = "audio/midi",
    /**
     * @public
     * @beta
     */
    MPEG = "audio/mpeg",
    /**
     * @public
     * @beta
     */
    QUICKTIME = "video/quicktime",
    /**
     * @public
     * @beta
     */
    WMV = "video/x-ms-wmv",
    /**
     * @public
     * @beta
     */
    THREE_GPP = "video/3gpp",
    /**
     * @public
     * @beta
     */
    TAR = "application/x-tar",
    /**
     * @public
     * @beta
     */
    RAR = "application/x-rar-compressed",
    /**
     * @public
     * @beta
     */
    BZIP2 = "application/x-bzip2",
    /**
     * @public
     * @beta
     */
    DMG = "application/x-apple-diskimage"
}

export declare namespace FileMimeType {
    /**
     * @public
     * @beta
     */
    export function ofValue(value: string): FileMimeType;
    export function ofFileType(type: FileType): FileMimeType;
}

/**
 *
 * The provider which will provide the file requested. There are specific fixed string types that can be used that
 * are supported.
 *
 * "client": The file provider will be the HTML client itself. E.g. will use XHR to download a file from a web server and
 * provide it.
 * "server-http": the service-html will instead do the XHR to download a file from a webserver and then it will provide it
 * to the HTML client
 * "server-fs": the service-html will load the file from the server filesystem, according to the specified security rules,
 * and then will provide it to the HTML Client.
 *
 * @public
 */
export declare type FileProvider = "client" | "server-http" | "server-fs" | string;

/**
 * @public
 * @beta
 */
export declare enum FileType {
    UNKNOWN = "UNKNOWN",
    TIF = "TIF",
    GIF = "GIF",
    WEBP = "WEBP",
    FLIF = "FLIF",
    X_CANON_CR2 = "X_CANON_CR2",
    JXR = "JXR",
    PSD = "PSD",
    EPUB = "EPUB",
    XPI_ZIP_FILENAME = "XPI_ZIP_FILENAME",
    ODT = "ODT",
    ODS = "ODS",
    ODP = "ODP",
    OXML_CONTENT_TYPES = "OXML_CONTENT_TYPES",
    OXML_RELS = "OXML_RELS",
    DOCX = "DOCX",
    PPTX = "PPTX",
    XLSX = "XLSX",
    DOC = "DOC",
    PPT = "PPT",
    XLS = "XLS",
    VSD = "VSD",
    VSDX = "VSDX",
    MSG = "MSG",
    TAR = "TAR",
    RAR = "RAR",
    IFF = "IFF",
    DMG = "DMG",
    MP4 = "MP4",
    MIDI = "MIDI",
    QUICKTIME = "QUICKTIME",
    RIFF = "RIFF",
    AVI = "AVI",
    WAV = "WAV",
    QCELP = "QCELP",
    WMV = "WMV",
    MPEG = "MPEG",
    MP3 = "MP3",
    THREE_GPP = "THREE_GPP",
    EXE = "EXE",
    RTF = "RTF",
    OLECF = "OLECF",
    JP2 = "JP2",
    BMP = "BMP",
    PNG = "PNG",
    ICO = "ICO",
    ZIP = "ZIP",
    PDF = "PDF",
    GZIP = "GZIP",
    BZIP2 = "BZIP2",
    JPEG = "JPEG",
    TXT = "TXT",
    XML = "XML",
    LZMA_7Z = "LZMA_7Z",
    JAVA_SER = "JAVA_SER",
    ITENC = "ITENC"
}

/**
 * @public
 * @beta
 */
export declare namespace FileType {
    
    
    
    
    
    
    
    
    
}

/**
 * The options type used by the FillPunchHoles image operation
 *
 * @public
 * @beta
 */
export declare type FillPunchHolesOptions = {
    maxWhitePerc?: number;
    minHoleDiameterMM?: number;
    maxHoleDiameterMM?: number;
    marginWidthMM?: number;
    checkLeftEdge?: boolean;
    checkRightEdge?: boolean;
    checkTopEdge?: boolean;
    checkBottomEdge?: boolean;
    circularBoundingRectOnly?: boolean;
    circularBoundingRectMaxDiff?: number;
    circularContourOnly?: boolean;
    circularContourMaxDiffFromRadius?: number;
};

export declare interface FolderClassSchema extends IndexClassSchema {
}

export declare interface FormTypeSchema {
    name: string;
}

declare interface HighlightZoneOptions {
    /**
     * absolute: (optional) boolean if true the rectangle is specified in absolute coordinates
     *
     * @public
     */
    absolute?: boolean;
    /**
     * (optional) boolean if true the rectangle will be drawn in the orientation of the page (e.g., if it is rotated). Otherwise it will be drawn with a 0 angle orientation
     *
     * @public
     */
    keepOrientation?: boolean;
    /**
     * a valid CSS color string. This is the color that will fill the zone rectangle so it is wise to have some transparency
     * (optional) CSS color value for the outline of the zone rect
     *
     * @public
     */
    color?: string;
    /**
     *
     * @public
     */
    outlineColor?: string;
    /**
     * (optional) if true the active image viewer will also try to scroll to the center of the supplied zone
     * @public
     */
    scrollToZone?: boolean;
}

/**
 * @public
 */
export declare interface IActionProperties {
    [key: string]: any;
}

/**
 * Represents Page-level Annotations. An annotation is a graphical marker on top of a
 * Page, that adds information, highlights or emphasizes part of the Page. An instance of this interface
 * represents an Annotation object on top of a Page.
 *
 * @remarks alias IPageAnnotation
 *
 * @public
 * @beta
 */
export declare interface IAnnotation {
    /**
     * @public
     * @beta
     */
    x: number;
    /**
     * @public
     * @beta
     */
    y: number;
    /**
     * @public
     * @beta
     */
    width: number;
    /**
     * @public
     * @beta
     */
    height: number;
    /**
     * @public
     * @beta
     */
    zOrder: number;
    /**
     * @public
     * @beta
     */
    displayText: string;
    /**
     * @public
     * @beta
     */
    name: string;
    /**
     * @public
     * @beta
     */
    rotation: number;
    /**
     * @public
     * @beta
     */
    horizontalTextAlignment: number;
    /**
     * @public
     * @beta
     */
    verticalTextAlignment: number;
    /**
     * @public
     * @beta
     */
    textColor: number;
    /**
     * @public
     * @beta
     */
    comment: string;
    /**
     * Provides the bounding rectangle of the annotation.
     *
     * @returns bounding rectangle in relative [0,1] coordinates
     *
     * @public
     */
    getAnnotationBounds(): IRectangle;
    
}

/**
 * A union of properties for annotation types that inherit the base {@link IAnnotation} type.
 * Properties of the IAnnotation type are supported by all subtypes, as well as some extra ones
 * for each subtype.
 *
 * @public
 * @beta
 */
export declare interface IAnnotationProperties {
    xpos?: number;
    ypos?: number;
    width?: number;
    height?: number;
    fillColor?: string;
    fillOpacity?: number;
    outlineWidth?: number;
    outlineColor?: string;
    outlineOpacity?: number;
    rotation?: number;
    zOrder?: number;
    displayText?: string;
    fontSize?: number;
    fontFamily?: AnnotationTextFontFamily;
    horizontalTextAlignment?: AnnotationTextAlignment;
    verticalTextAlignment?: AnnotationTextAlignment;
    textColor?: string;
    /**
     * Supported by {@link IBlockArrowAnnotation}
     */
    arrowSize?: number;
    lineSize?: number;
    orientation?: AnnotationArrowOrientation;
    /**
     * Supported by {@link IImageAnnotation}
     */
    rubberstampPath?: string;
    /**
     * Supported by {@link IRectangleAnnotation}
     */
    arcRadius?: number;
    /**
     * Supported by {@link ITriangleAnnotation}
     */
    baseLength?: number;
    vertexPosition?: number;
}

/**
 * Events class for the application (exposed as property AppEvents)
 *
 * @public
 */
export declare interface IAppEvents {
    /**
     * Registers a callback function to call when the node selection events
     *
     * @param listener - Callback to called (passed a INode[])
     *
     * @public
     */
    addNodeSelectionListener(listener: INodeSelectionListener): void;
    /**
     * Unregisters a callback function for node selection events
     *
     * @param listener - The callback to remove from the list
     * @returns boolean - True when the listener was found, false otherwise
     *
     * @public
     */
    removeNodeSelectionListener(listener: INodeSelectionListener): boolean;
    /**
     * Registers a callback (listener) function that gets called on Viewer events
     *
     * in an image viewer changes.
     * @param listener - Callback
     *
     * @public
     */
    addViewerListener(listener: IViewerListener): void;
    /**
     * Unregisters a registered callback (listener) function for Viewer events
     *
     * @param listener - The callback to remove from the list
     * @returns boolean - True when the listener was found, false otherwise
     *
     * @public
     */
    removeViewerListener(listener: IViewerListener): boolean;
    /**
     * Registers a callback (listener) function that gets called on Search events.
     *
     * @param listener - Callback
     *
     * @public
     */
    addSearchListener(listener: ISearchListener): void;
    /**
     * Unregisters a registered callback (listener) function for Search events
     *
     * @param listener - The callback to remove from the list
     * @returns boolean - True when the listener was found, false otherwise
     *
     * @public
     */
    removeSearchListener(listener: ISearchListener): boolean;
}

/**
 * Provides information on recognized Bar Codes in the Page
 *
 * @remarks alias IPage.BarcodeData
 *
 * @beta
 * @public
 */
export declare interface IBarcodeData {
    /**
     * Returns the type of Bar Code
     * @returns BarcodeType
     *
     * @public
     * @beta
     *
     */
    getBarcodeType(): BarcodeType;
    /**
     * see {@link IBarcodeData.getBarcodeType}
     *
     * @public
     * @beta
     *
     */
    readonly barcodeType: BarcodeType;
    /**
     * Returns the value of the Bar Code
     * @returns string
     *
     * @public
     * @beta
     *
     */
    getValue(): string;
    /**
     * see {@link IBarcodeData.getValue}
     *
     * @public
     * @beta
     *
     */
    readonly value: string;
    /**
     * Returns the X coordinate of the top-left corner of the Bar Code in the Page.
     * The returned coordinate is relative to the Page's width and it is
     * a number between 0 and 1.0.
     *
     * If global parameter `use_relative_page_coordinates_and_point_size` is set to `false`,
     * then the returned value is an absolute coordinate.
     *
     * @public
     * @beta
     *
     */
    getRectX(): number;
    /**
     * see {@link IBarcodeData.getRectX}
     *
     * @public
     * @beta
     */
    readonly rectX: number;
    /**
     * Returns the Y coordinate of the top-left corner of the Bar Code in the Page.
     * The returned coordinate is relative to the Page's height and it is
     * a number between 0 and 1.0.
     *
     * If global parameter `use_relative_page_coordinates_and_point_size` is set to false,
     * then the returned value is an absolute coordinate.
     *
     * @public
     * @beta
     */
    getRectY(): number;
    /**
     * see {@link IBarcodeData.getRectY}
     *
     * @public
     * @beta
     */
    readonly rectY: number;
    /**
     * Returns the width of the Bar Code in the Page.
     * The returned size is relative to the Page's width and it is
     * a number between 0 and 1.0.
     *
     * If global parameter `use_relative_page_coordinates_and_point_size` is set to false,
     * then the returned value is an absolute size.
     *
     * @public
     * @beta
     */
    getRectWidth(): number;
    /**
     * see {@link IBarcodeData.getRectWidth}
     *
     * @public
     * @beta
     */
    readonly rectWidth: number;
    /**
     * Returns the height of the Bar Code in the Page.
     * The returned size is relative to the Page's height and it is
     * a number between 0 and 1.0.
     *
     * If global parameter `use_relative_page_coordinates_and_point_size` is set to false,
     * then the returned value is an absolute size.
     *
     * @public
     * @beta
     */
    getRectHeight(): number;
    /**
     * The height of the Bar Code in the Page.
     *
     * see {@link IBarcodeData.getRectHeight}
     *
     * @public
     * @beta
     */
    readonly rectHeight: number;
}

/**
 * Represents a Batch in the ImageTrust system.
 *
 * <b>Note</b>: Write-access to properties depends on the context in which the model is used. When
 * in a read-only context, `set*` methods will throw an `UnmodifiableException`.
 *
 * @beta
 * @public
 *
 */
export declare interface IBatch extends INode {
    /**
     * Sets the name of the Batch to the specified value.
     * @param name - the name of the batch
     *
     * @beta
   * @public
     */
    setName(name: string): any;
    /**
     * see {@link IBatch.setName}
     *
     * @beta
   * @public
     */
    name: string;
    /**
     * Returns the description of this Batch.
     * @returns string
     *
     * @beta
   * @public
     */
    getDescription(): string;
    /**
     * Sets the description of the Batch.
     * @param description - the new description of the Batch
     *
     * @beta
   * @public
     */
    setDescription(description: string): any;
    /**
     * see {@link IBatch.getDescription}, {@link IBatch.setDescription}
     *
     * @beta
   * @public
     */
    description: string;
    /**
     * Returns the current status of this Batch.
     * @returns string
     *
     * @beta
   * @public
     */
    getStatus(): string;
    /**
     * Set the status of the Batch. This should be one of the values of the {@link IJob.getStatuses}.
     * @param status - the new status.
     *
     * @beta
   * @public
     */
    setStatus(status: string): any;
    /**
     * see {@link IBatch.getStatus}, {@link IBatch.setStatus}
     *
     * @beta
   * @public
     */
    status: string;
    /**
     * Returns any notes made for this Batch.
     * @returns string
     *
     * @beta
   * @public
     */
    getNotes(): string;
    /**
     * see {@link IBatch.getNotes}
     *
     * @beta
   * @public
     */
    readonly notes: string;
    /**
     * Returns the priority of this Batch. Higher numbers denote a higher priority.
     * @returns number
     *
     * @beta
   * @public
     */
    getPriority(): number;
    /**
     * Set the priority of this Batch.
     * @param priority - the new priority of the Batch.
     *
     * @beta
   * @public
     */
    setPriority(priority: number): any;
    /**
     * see {@link IBatch.getPriority}, {@link IBatch.setPriority}
     *
     * @beta
   * @public
     */
    priority: number;
    /**
     * Returns the date and time this Batch was created.
     * @returns the date of batch creation
     *
     * @beta
   * @public
     */
    getCreateDate(): Date;
    /**
     * The date and time this Batch was created.
     * see {@link IBatch.getCreateDate}
     *
     * @beta
   * @public
     */
    readonly createDate: Date;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}

/**
 * @public
 */
export declare interface IBatchEvent extends INodesEvent {
    /**
     * @public
     */
    batch: IBatch;
}

/**
 * @public
 */
export declare interface IBatchListener {
    batchStructureChanged?(event: IBatchEvent): any;
    batchLoaded?(event: IBatchEvent): any;
}

/**
 * @public
 */
export declare interface ICustomContextMenuItem {
    /**
     * The title that will displayed in the context menu.
     *
     * @public
     */
    title: string;
    /**
     * Whether the menu item will be enabled or disabled. set to false for disabling. Optional. Default true.
     *
     * @public
     */
    enabled?: boolean;
    /**
     * The position that the item will appear in the menu. Omit it to insert the item as
     * the last item. Optional.
     *
     * @public
     */
    position?: number;
    /**
     * A callback function that will get called/executed when the user clicks or selects the item. Optional.
     *
     * @public
     */
    onclick?: () => void;
    /**
     * An array of CustomContextMenuItem objects. If non-empty, the current item will be turned into a submenu
     * which upon user click/selection will open a sub menu listing the array items. Optional.
     *
     * @public
     */
    items?: Array<ICustomContextMenuItem>;
}

/**
 * @public
 * @beta
 */
export declare interface ICustomThemeConfig {
    base?: string;
    accent?: string;
}

/**
 * @public
 */
export declare interface IDialog {
    open(): Promise<void>;
    close(): Promise<void>;
}

/**
 * @public
 */
export declare namespace IDialog {
    export interface IResult {
        data?: any;
    }
}

/**
 * @public
 */
export declare interface IDialogProgress {
    updateProgress?(progressPct: number, progressMessage?: string): void;
    closeFn(): void;
}

/**
 * This is the central point of communication between the Transactional
 * application and the external world.
 *
 * @public
 */
export declare interface IDispatch {
    
    /**
     * Deinitializes, deconstructs and removes the application from the DOM.
     *
     * @public
     */
    unload(): Promise<any>;
    /**
     * Display a modal dialog with a custom HTML content, and a title.
     * @param content - an HTMLElement with the custom HTML content
     * @param title - the title of the dialog
     *
     * @public
     */
    dialog(content: HTMLElement, title: string, closable: boolean): IDialog;
}

/**
 * Represents a Document within a Batch in the ImageTrust system.
 *
 * <b>Note</b>: Write-access to properties depends on the context in which the model is used. When
 * in a read-only context, `set*` methods will throw an `UnmodifiableException`.
 *
 * @public
 * @beta
 */
export declare interface IDocument extends INode {
    
    
    
    
    
    
    /**
     * Splits the folder that this document belongs to in two folders so as the
     * second folder contains this document as its first document.
   *
     * @returns the new folder
     *
     * @beta
   * @public
     */
    splitFolder(): IFolder;
    /**
       * Returns true if this Document has been created from a read-only file (e.g. a signed PDF).
     *
     * @beta
     * @public
     */
    treatedAsReadOnly(): boolean;
}

/**
 * Download information regarding a generated document file. The available properties are:
 * - url: The url under which the created document file is located. Can be downloaded via a normal GET request.
 * - nonSearchablePageCount: If a searchable document is requested, this property indicates the number of pages for
 * which text generation failed. The requested file is still generated with the failed pages remaining non
 * searchable. This number should be used, depending on integration needs, to decide whether the resulting file has
 * an acceptable % of non searchable pages or if it should be retried/aborted.
 *
 * @public
 */
export declare type IDownloadInfo = {
    url: string;
    nonSearchablePageCount: number;
};

/**
 * Possible event sources are "api", "guiUserAction" and "guiSearchAndRedact".
 * @public
 * @beta
 */
export declare type IEventSource = "api" | "guiUserAction" | "guiSearchAndRedact";

/**
 * Holds information about a file
 *
 * @public
 * @beta
 */
export declare interface IFileInfo {
    /**
     * Name of the file.
     *
     * @public
     * @beta
     */
    fileName: string;
    /**
     * Detected file type.
     *
     * @public
     * @beta
     */
    fileType: FileType;
    /**
     * Detected file mime type.
     *
     * @public
     * @beta
     */
    fileMimeType: FileMimeType;
    /**
     * File size in bytes.
     *
     * @public
     * @beta
     */
    fileSize: number;
    /**
     * Optional signing information in case of PDF file type.
     *
     * @public
     * @beta
     */
    pdfSigInfo?: IPdfSigInfo;
    /**
     * Optional flag for password protected files.
     *
     * @public
     * @beta
     */
    encrypted?: boolean;
}

/**
 * Represents a Folder within a Batch in the ImageTrust system.
 *
 * <b>Note</b>: Write-access to properties depends on the context in which the model is used. When
 * in a read-only context, `set*` methods will throw an `UnmodifiableException`.
 *
 * @beta
 * @public
 */
export declare interface IFolder extends INode {
    
    
}

/**
 * Information about a form type.
 *
 * @beta
 * @public
 */
declare interface IFormType {
    
    
    
    
    
    
    
    
    
    
}

/**
 * Represents the Job Definition for a Batch.
 *
 * <b>Note</b>: Write-access to properties depends on the context in which the model is used. When
 * in a read-only context, `set*` methods will throw an `UnmodifiableException`.
 *
 * @beta
 * @public
 *
 */
export declare interface IJob extends INode {
    /**
     * The description of this Job Definition.
     *
     * @beta
   * @public
     */
    getDescription(): string;
    /**
     * The description of this Job Definition.
     *
     * @beta
   * @public
     */
    readonly description: string;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}

/**
 * Implements the legacy JobScript
 *
 * @public
 */
export declare interface IJobEvents {
    /**
     * This callback allows for applying custom logic before a file is imported from the file system to the application.
     *
     * The file's mime type, extension and size (in <b>bytes</b>) will be provided as arguments to this function and
     * a boolean value is expected as a response in order to continue with the importing process
     * or notify the user that the file was blocked. If a string value is returned, the import will be <b>blocked</b>
     * and the value will be in the information dialog that will be shown to the user.
     *
     * The mime type checking happens by inspecting the file itself and does not rely in its extension
     * in the file name. If the file inspection returns an unknown file, then the mimeType argument
     * will have a value of 'undefined'.
     *
     * The extension is extracted from the <b>file name</b> itself. This allows for checking for
     * extension-mime discrepancies and possibly tweaked files.
     *
     * Note that <b>you</b> are responsible for handling upper and lowercase file extensions.
     *
     * If the file inspection and/or the extension extraction from the file name <b>fail</b> then the file
     * will not be imported.
     *
     * @public
     */
    checkFileAllowed: (mimeType: FileMimeType, extension: string, fileSize: number) => boolean | string;
    /**
     * Called every time a scan operation is about to start.
     * The callback function can return different types of values depending on the desired action:
     *  - returning nothing will let the scanning process proceed as normal
     *  - returning a boolean false value will abort the scanning process
     *  - returning a {@link PreScanReturnValue} object allows for triggering of barcode scanning for this specific scan action
     *
     *  @public
     */
    preScan: (batch: IBatch, scanProfile: IScanProfile) => void | boolean | ScriptResultConsts | PreScanReturnValue;
    /**
     * Called for every file that has been imported into the application.
     * This callback can be used to decide if a file must be treated as a read-only file.
     * A read-only file is added in its own Document and can be viewed but not modified in any way (add pages, split, merge etc).
     * If a read-only Document is downloaded, the original file is provided. This allows for keeping information such as
     * digital signatures in pdfs intact but still be able to view the file from within the application.
     *
     * @param fileMetadata - Contains metadata regarding the file that is about to be imported.
     *
     * @public
     */
    treatFileAsReadonly: (fileMetadata: IFileInfo) => boolean;
    /**
     * Called every time a scanning operation has finished.
     *
     * As with {@link IJobEvents.pageArrived}, it is <b>not</b> guaranteed that the batch's related images have finished
     * uploading to the server at this step.
     *
     * @public
     */
    postScan: (batch: IBatch) => void;
    /**
     * Called every time a scanned page is about to be added to the batch.
     *
     * Please note that at this point it is <b>not</b> guaranteed that the related image
     * has finished uploading to the server. The page can be added to the batch
     * while the upload is still in progress. In order for an action to be guaranteed to
     * execute after the image has finished uploading (in case of an {@link ITCDispatch.invokeOnServer}
     * that needs access to the page images for example) usage of {@link IPage.awaitUpload} is mandatory.
     *
     * DO NOT modify the batch structure inside this event. Doing so will result in undefined behavior.
     * Use the defined Job Separation rules for any type of on the fly modification required.
     *
     * @public
     */
    pageArrived: (batch: IBatch, page: IPage) => void | PageArrivedReturnValue;
    /**
     * Called every time a scanned page has been added to the batch.
     *
     * As with {@link IJobEvents.pageArrived}, it is <b>not</b> guaranteed that the page's related image has finished
     * uploading to the server.
     *
     * DO NOT modify the batch structure inside this event. Doing so will result in undefined behavior.
     * Use the defined Job Separation rules for any type of on the fly modification required.
     *
     * @public
     */
    pageScanned: (batch: IBatch, document: IDocument, page: IPage) => void | boolean | ScriptResultConsts;
    /**
     * @beta
     * @public
     */
    batchStructureChanged: (batch: IBatch) => void;
    /**
     * @beta
     * @public
     */
    batchCreated: (batch: IBatch) => void;
    /**
     * @beta
     * @public
     */
    batchLoaded: (batch: IBatch) => void;
    /**
     * @beta
     * @public
     */
    batchUnloaded: (batch: IBatch, reason: string, actionFollows: string) => void;
    /**
     * @beta
     * @public
     */
    batchCanBeClosed: (batch: IBatch) => any;
    /**
     * @beta
     * @public
     */
    batchWillClose: (batch: IBatch, suspend: boolean, closeContext: string) => any;
    /**
     * @beta
     * @public
     */
    setIndexMode: (start: boolean, batch: IBatch) => any;
    
    
    /**
     * Callback returning a CustomSearchOptions object. This configuration object will be used
     * to customize the Search pane (default values, available options, predefined patterns etc).
     *
     * @public
     * @public
     */
    getCustomSearchOptions: () => CustomSearchOptions;
    /**
     * Called every time annotations are added to a page.
     * Set this callback when you need to either control what annotations are added on a page
     * or how they are added.
     * You can also implement custom functionality such as adding extra annotations automatically.
     *
     * @public
     */
    onAddedAnnotations: (source: IEventSource, page: IPage, annotations: IAnnotation[]) => void;
    /**
     * Callback returning a RedactionOptions object. This configuration object will be used
     * to customize the Redaction Reasons dialog and its functionality (predefined reasons, free text reasons etc).
     * The source parameter is provided to the callback for more fine grained control and allows
     * for checking of the redaction action's origin (either user action, added from the API method or added
     * from search and redact functionality).
     *
     * This method is called every time a redaction annotation is added on a page.
     *
     * @public
     */
    getCustomRedactionOptions: (source: IEventSource) => RedactionOptions;
    /**
     * Returns whether a context action is enabled or not.
     *
     * @public
     *
     * @param actionType
     * @param actionProperties
     * @param actionNode
     * @param selectedNodes
     */
    isContextActionEnabled: (actionType: string, actionProperties: any, actionNode: INode, selectedNodes: Array<INode>) => boolean;
}

/**
 * Enumerates the supported Color Modes or Spaces.
 *
 * @beta
 * @public
 */
export declare enum ImageColorMode {
    /**
     * 24-bit RGB
     *
     * @public
     * @beta
     */
    COLOR = 0,
    /**
     * Grayscale
     *
     * @public
     * @beta
     */
    GRAY = 1,
    /**
     * Black and white
     *
     * @public
     * @beta
     */
    BINARY = 2
}

/**
 * @internal
 */
export declare namespace ImageColorMode {
    const I18N: {};
}

export declare interface IndexClassSchema {
    fields?: Array<FieldSchema>;
    script?: string;
    name: string;
}

/**
 * The base class of the ImageTrust Object Model.
 *
 * <b>Note</b>: Write-access to properties depends on the context in which the model is used. When
 * in a read-only context, `set*` methods will throw an `UnmodifiableException`.
 *
 * @beta
 * @public
 */
export declare interface INode {
    /**
     * Returns the internal ID value of this object. This value is <i>not</i> guaranteed to be unique
     * outside the ImageTrust system.
     *
     * @beta
   * @public
     */
    getId(): number;
    /**
     *
     * see {@link INode.getId}
     *
     * @beta
   * @public
     */
    readonly id: number;
    
    /**
     *
     * see {@link INode.getUuid}
     *
     * @beta
   * @public
     */
    readonly uuid: string;
    /**
     * Returns the name of this object, as specified by a user, or determined by other rules.
     *
     * @beta
   * @public
     */
    getName(): string;
    /**
     * see {@link INode.getName}
     *
     * @beta
   * @public
     */
    readonly name: string;
    /**
     * Returns a reference to the {@link IBatch} object, that represents the Batch this object is a
     * part of.
     *
     * @beta
   * @public
     */
    getBatch(): IBatch;
    /**
     * see {@link INode.getBatch}
     *
     * @beta
   * @public
     */
    readonly batch: IBatch;
    /**
     * Returns a reference to the {@link IJob} object, that represents the Job Definition for this
     * object and its owner Batch.
     *
     * @beta
   * @public
     */
    getJob(): IJob;
    /**
     * see {@link INode.getJob}
     *
     * @beta
   * @public
     */
    readonly job: IJob;
    /**
     * Returns the name of the Job Definition for this object and its owner Batch.
     *
     * @beta
   * @public
     */
    getJobName(): string;
    /**
     * see {@link INode.getJobName}
     *
     * @beta
   * @public
     */
    readonly jobName: string;
    /**
     * Returns the parent {@link INode} object of this object in the Batch.
     *
     * @beta
   * @public
     */
    getParent(): INode;
    /**
     * see {@link INode.getParent}
     *
     * @beta
   * @public
     */
    readonly parent: INode;
    /**
     * Returns the list of {@link INode} objects immediately owned by this object in the Batch.
     *
     *  differs returns a java.util.List\<INode\> instead of INode[]
     *  differs returns a java.util.List\<INode\> instead of INode[]
     *
     * @beta
   * @public
     */
    getChildren(): INode[];
    /**
     * see {@link INode.getChildren}
     *
     * @beta
   * @public
     */
    readonly children: INode[];
    /**
     * Returns the number of objects immediately owned by this object in the Batch.
     *
     * @beta
   * @public
     */
    getChildCount(): number;
    /**
     * see {@link INode.getChildCount}
     *
     * @beta
   * @public
     */
    readonly childCount: number;
    /**
     * Returns the list of {@link IStack} objects owned by this {@link IBatch} object.
     * This method only returns a meaningful value when invoked on a {@link IBatch} object.
     *
     *
     *
     *
     * @beta
     * @public
     */
    getStacks(): IStack[];
    /**
     * see
     *
     * @beta
     * @public
     */
    readonly stacks: IStack[];
    /**
     * Returns the number of Stacks in this Batch
     *
     * @beta
     * @public
     */
    getStackCount(): number;
    /**
     * see
     *
     * @beta
     * @public
     */
    readonly stackCount: number;
    /**
     * Returns the list of {@link IFolder} objects owned by this {@link IBatch} object.
     * This method only returns a meaningful value when invoked on a {@link IBatch} object.
     *
     *  differs returns a java.util.List\<IFolder\> instead of IFolder[]
     *  differs returns a java.util.List\<IFolder\> instead of IFolder[]
     *
     * @beta
   * @public
     */
    getFolders(): IFolder[];
    /**
     * see {@link INode.getFolders}
     *
     * @beta
   * @public
     */
    readonly folders: IFolder[];
    /**
     * Returns the number of Folders in this Batch
     *
     * @beta
   * @public
     */
    getFolderCount(): number;
    /**
     * see {@link INode.getFolderCount}
     *
     * @beta
   * @public
     */
    readonly folderCount: number;
    /**
     * Returns the list of {@link IDocument} objects owned by this object in the Batch. If this
     * object is an {@link IBatch} instance, this method will include all Documents in the Batch. If
     * this object is an {@link IFolder} instance, this method will only return the Documents
     * immediately owned by this Folder.
     *
     *  differs returns a java.util.List\<IDocument\> instead of IDocument[]
     *  differs returns a java.util.List\<IDocument\> instead of IDocument[]
     *
     * @beta
   * @public
     */
    getDocuments(): IDocument[];
    /**
     * see {@link INode.getDocuments}
     *
     * @beta
   * @public
     */
    readonly documents: IDocument[];
    /**
     * Returns the number of Documents owned by this object in the Batch. See method
     * {@link INode.getDocuments} for which Documents are included in the count.
     *
     * @beta
   * @public
     */
    getDocumentCount(): number;
    /**
     * see {@link INode.getDocumentCount}
     *
     * @beta
   * @public
     */
    readonly documentCount: number;
    /**
   * Returns the list of {@link IPage} objects owned by this object in the Batch. If this object is
   * an {@link IBatch} instance, this method will include all Pages in the Batch; if it is an {@link IStack}
   * instance, this method will include all Pages of all Documents of all Folders in this Stack;
   * if it is an {@link IFolder} instance, this method will include all Pages of all Documents in this Folder;
   * and if it is an {@link IDocument} instance, only the Pages that belong to this Document will
   * be included.
     *
     *  differs returns a java.util.List\<IPage\> instead of IPage[]
     *  differs returns a java.util.List\<IPage\> instead of IPage[]
     *
     * @beta
   * @public
     */
    getPages(): IPage[];
    /**
     * see {@link INode.getPages}
     *
     * @beta
   * @public
     */
    readonly pages: IPage[];
    /**
     * Returns the number of Pages owned by this object in the Batch. See method {@link INode.getPages}
   * for which Pages are included in the count.
     *
     * @beta
   * @public
     */
    getPageCount(): number;
    /**
     * see {@link INode.getPageCount}
     *
     * @beta
   * @public
     */
    readonly pageCount: number;
    /**
     * Returns an array of all {@link INode} sub-nodes, down the whole sub-tree,
     * for this {@link INode}.
     *
     * @beta
     *
     *  notexists
     *  notexists
   *
   * @public
     */
    getAllNodes(): INode[];
    /**
     * see {@link INode.getAllNodes}
     *
     * @beta
     *  notexists
     *  notexists
   *
   * @public
     */
    readonly allNodes: INode[];
    
    
    
    
    
    
    
    
    
    
    
    /**
     * Get the value of a property.
     * This is equivalent to <code>properties.&lt;name&gt;</code>.
     * @param name - the name of the property whose value you want to get
     *
     * @beta
   * @public
     */
    getProperty(name: string): any;
    /**
     * Set a property value on the node.
     * Properties are set on the <code>properties</code> object of the {@link INode}.
     * This method is equivalent to <code>properties.&lt;name&gt; = &lt;value&gt;</code>; the difference is
     * that this method will always cause a PropertyChangeEvent to be emitted.
     * @param name - the name of the property to set
     * @param value - the value of the property to set
     * @param deleteIfEmpty - whether to delete the property, if value is empty (e.g. null or undefined or \<empty string\>)
     *
     * @beta
     *  differs takes only the two first arguments
     *  differs takes only the two first arguments
   * @public
     */
    setProperty(name: string, value: any, deleteIfEmpty?: boolean): void;
    /**
     * Get a reference to the {@link INode} properties.
     * This object is to be used to hold any custom property that a Node might require and provides
     * property change event functionality.
     * You can read or write directly to this object.
     * The keys of the properties object are always strings (not numbers, as can be the case in Javascript).
     *
     * Note: in Transactional HTML Client, the method `Dispatch.setLevelName` that does custom node naming
     * makes use of this object.
     *
     * @beta
   * @public
     */
    getProperties(): any;
    /**
     * see {@link INode.getProperties}
     *
     * @beta
   * @public
     */
    readonly properties: any;
    /**
     * Delete a property
     * @param name - the name of the property to delete
     *
     * @beta
   * @public
     */
    deleteProperty(name: string): void;
    
    
    
    /**
     * Returns the index of this node in relation to it's parent. Returned index
     * is zero-based
     *
     * @beta
   * @public
     */
    getNodeIndex(): number;
    /**
     * see {@link INode.getNodeIndex}
     *
     * @beta
   * @public
     */
    readonly nodeIndex: number;
    /**
     * Return the index of this node in relation to its level.
     *
     * @beta
     *  notexists
     *  notexists
   * @public
     */
    getLevelIndex(): number;
    /**
     * see {@link INode.getLevelIndex}
     *
     * @beta
     *  notexists
     *  notexists
   * @public
     */
    readonly levelIndex: number;
    /**
     * Returns a friendly name for the node level,
  * e.g. Job, Batch, Stack, Folder, Document, Page, PageEDoc
     *
     * @beta
     *  notexists
     *  notexists
   * @public
     */
    getLevelName(): string;
    /**
  * A friendly name for the node level (e.g. Job, Batch, Stack, Folder, Document, Page, PageEDoc)
     *
     * see {@link INode.getLevelName}
     *
     * @beta
     *  notexists
     *  notexists
   * @public
     */
    readonly levelName: string;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}

/**
 * @public
 */
export declare interface INodeSelectionListener {
    /**
     *
     * @param selectedNodes - list of the selected nodes
     *
     * @public
     */
    (selectedNodes: INode[]): void;
}

/**
 * @public
 */
export declare interface INodesEvent {
    /**
     * @public
     */
    nodes: Array<INode>;
}

/**
 * Nuance engine specific configurations.
 *
 * @remarks alias NuanceOcrConfig
 *
 * @public
 * @beta
 */
export declare interface INuanceEngineConfig {
    /**
     * The Nuance engine that will be used for OCR.
     *
     * @public
     * @beta
     */
    nuanceEngine?: NuanceEngine;
    /**
     * A list of languages that the Nuance engine will attempt to recognize.
     *
     * @public
     * @beta
     */
    languages?: NuanceLanguage[];
    /**
     * Ocr language selection mode: in case more than one languages are defined for OCR,
     * whether all of them will be used or the engine will try pick one of them by guessing
     * from the content
     *
     * @public
     * @beta
     */
    mode?: NuanceMode;
}

/**
 * Configuration to be used for an OCR operation.
 *
 * @public
 * @beta
 */
export declare interface IOCRConfiguration {
    /**
     * Soft timeout in millis. Will cancel the ocr operation if it hasn't finished until that time.
     *
     * @public
     * @beta
     */
    softTimeout?: number;
    /**
     * Extra time in millis that is ADDED to the soft timeout time. The result is used as a hard timeout.
     * If the engine becomes unresponsive for some reason, it will be terminated after SOFT + HARD millis.
     *
     * @public
     * @beta
     */
    hardTimeout?: number;
    /**
     * The engine name that will be used, as string.
     * Possible values are:
     *  - "NUANCE"
     *
     * @public
     * @beta
     */
    engine?: "NUANCE";
    /**
     * Engine specific configuration. This setting is optional. If not provided
     * the default configurations that have been provided to the HTML Service
     * will be used.
     *
     * @public
     * @beta
     */
    nuanceConfiguration?: INuanceEngineConfig;
}

/**
 * Represents a scanned or imported Page within a Batch in the ImageTrust system.
 *
 * <b>Note</b>: Write-access to properties depends on the context in which the model is used. When
 * in a read-only context, `set*` methods will throw an `UnmodifiableException`.
 *
 * @beta
 * @public
 */
export declare interface IPage extends INode {
    /**
     * Returns the recognized Bar Codes in this Page as a an array.
     * The order of the returned bar codes is left-to-right and top-to-bottom
     *
     *  differs returns a java.util.List\<IBarcodeData\> instead of IBarcodeData[]
     *  differs returns a java.util.List\<IBarcodeData\> instead of IBarcodeData[]
     * @beta
     * @public
   */
    getBarcodeData(): IBarcodeData[];
    /**
     * see {@link IPage.getBarcodeData}
   *
   * @beta
     * @public
   */
    readonly barcodeData: IBarcodeData[];
    
    
    /**
     * Returns a `Promise` object which asynchronously will set the <code>blank</code> property
     * of the page if there are less than <code>blackPixelsPercent</code> black pixels (the {@link INode.isBlank}
     * method returns the value of the <code>blank</code> property.
     *
     * Calling this method will re-calculate this property. Before calling
     * the {@link INode.isBlank} method you should first call this one to make sure
     * that the property has been set.
     *
     * If there is a blank-page separation on the job, then this property is
     * calculated during the application of the separation rules.
     *
     * **NOTE:** This method returns immediately with a Promise object which at that moment does not have any
     * defined value (undefined). The value will be available when the process has been completed
     * and the Promise has been resolved. Use the `then()` and `catch()` methods of the returned Promise object
     * in order to run any code after the result becomes available.
     *
     *  differs {@javadoclink ../../../javadoc/com/imagetrust/tc/model/object/IPage.html#detectIsBlank-float-} is a synchronous and blocking call which returns the actual boolean result value instead of an unresolved Promise<boolean>
     *  differs {@javadoclink ../../../javadoc/com/imagetrust/tc/model/object/IPage.html#detectIsBlank-float-} is a synchronous and blocking call which returns the actual boolean result value instead of an unresolved Promise<boolean>
     *
     * @param blackToWhitePixelPerc - a number betwen 0.0 and 1.0 that represents the
     *   amount of black pixels on the page, above which the page is not considered
     *   blank. A good value to use is 0.03 (corresponds to 3% black pixels).
     *
   * @beta
   * @public
     */
    detectIsBlank(blackToWhitePixelPerc: number): Promise<boolean>;
    /**
     * Returns true if this Page is considered to be blank, false otherwise.
     *
     * Unless there has been a previous call to the {@link IPage.detectIsBlank} method or
     * a blank-page separation has been previously done (that forces this value to be calculated), this
     * method will return undefined. Make sure to check the return value.
     *
     * @param blackToWhitePixelPerc - a number betwen 0.0 and 1.0 that represents the
   *   amount of black pixels on the page, above which the page is not considered
   *   blank. A good value to use is 0.03 (corresponds to 3% black pixels).
     *
     * @beta
   * @public
     *
     */
    isBlank(blackToWhitePixelPerc: number): boolean;
    /**
     * Returns the width of the Page image.
     * @returns number
     *
   * @beta
   * @public
     */
    getImageWidth(): number;
    /**
     * see {@link IPage.getImageWidth}
   *
   * @beta
   * @public
     */
    readonly imageWidth: number;
    /**
     * Returns the height of the Page image.
   *
     * @beta
   * @public
     */
    getImageHeight(): number;
    /**
     * see {@link IPage.getImageHeight}
     *
   * @beta
   * @public
     */
    readonly imageHeight: number;
    /**
     * Returns the horizontal resolution of the Page image.
     *
   * @beta
   * @public
     */
    getDpiX(): number;
    /**
     * Set the horizontal resolution of the Page image
     *
   * @beta
   * @public
     */
    setDpiX(dpiX: number): any;
    /**
     * see {@link IPage.getDpiX}, {@link IPage.setDpiX}
     *
   * @beta
   * @public
     */
    dpiX: number;
    /**
     * Returns the vertical resolution of the Page image.
     *
   * @beta
   * @public
     */
    getDpiY(): number;
    /**
     * Set the horizontal resolution of the Page image
     *
   * @beta
   * @public
     */
    setDpiY(dpiY: number): any;
    /**
     * see {@link IPage.getDpiY}, {@link IPage.setDpiY}
     *
   * @beta
   * @public
     */
    dpiY: number;
    /**
     * Returns the physical width of the Page image in inches, if there is one, else it returns -1.
     * Non-rastered images (like PDF pages) have a physical width, or raster
     * images that also have {@link IPage.getDpiX} information.
     *
   * @beta
   * @public
     */
    getPhysicalWidth(): number;
    /**
     * see {@link IPage.getPhysicalWidth}
     *
   * @beta
   * @public
     */
    readonly physicalWidth: number;
    /**
     * Returns the physical height of the Page image in inches, if there is one, else it returns -1.
     * Non-rastered images (like PDF pages) have a physical height, or raster
     * images that also have {@link IPage.getDpiY} information.
     *
   * @beta
   * @public
     */
    getPhysicalHeight(): number;
    /**
     * see {@link IPage.getPhysicalHeight}
     *
   * @beta
   * @public
     */
    readonly physicalHeight: number;
    /**
     * Returns the Color Mode (or Space) of this Page.
     *
     */
    getImageColorMode(): ImageColorMode;
    /**
     * see {@link IPage.getImageColorMode}
     *
   * @beta
   * @public
     */
    readonly imageColorMode: ImageColorMode;
    /**
     * Returns the side of the Page in the original paper Document.
     *
   * @beta
   * @public
     */
    getSide(): IPage.Side;
    /**
     * see {@link IPage.getSide}
     *
   * @beta
   * @public
     */
    readonly side: IPage.Side;
    /**
     * Returns the title of this Page.
     *
   * @beta
   * @public
     */
    getTitle(): string;
    /**
     * see {@link IPage.getTitle}
     *
   * @beta
   * @public
     */
    readonly title: string;
    /**
     * @returns the ImageTrust-internal file name of this Page
     *
   * @beta
   * @public
     */
    getFileName(): string;
    /**
     * see {@link IPage.getFileName}
     *
   * @beta
   * @public
     */
    readonly fileName: string;
    /**
     * Whether this object represent an e-document.
     *
   * @beta
   * @public
     */
    isEDoc(): boolean;
    /**
     * see {@link IPage.isEDoc}
     *
   * @beta
   * @public
     */
    readonly eDoc: boolean;
    /**
     * Returns a ImageTrust-internal unique "handle" for this Page. This value is guaranteed to be
     * globally unique.
     *
     * This method is a synonym for {@link INode.getUuid}.
     *
   * @beta
   * @public
     */
    getHandle(): string;
    /**
     * Returns any Annotations placed on this Page.
     *
     *  differs returns a java.util.List<IPageAnnotations> instead of IAnnotation[]
     *  differs returns a java.util.List<IPageAnnotations> instead of IAnnotation[]
     *
   * @beta
   * @public
     */
    getAnnotations(): IAnnotation[];
    /**
     * see {@link IPage.getHandle}
     *
   * @beta
   * @public
     */
    readonly handle: string;
    
    
    
    /**
     * Returns the original file name for this page.
     *
   * @beta
   * @public
     */
    getOriginalFileName(): string;
    /**
     * see {@link IPage.getOriginalFileName}
     *
   * @beta
   * @public
     */
    readonly originalFileName: any;
    /**
     * Splits the document that this page belongs to in two documents so as the
     * second document contains this page as its first page.
     *
     *  notexists
     *  notexists
     *
     * @returns the new document that was created
     *
   * @beta
   * @public
     */
    splitDocument(): IDocument;
    
    
    /**
     * Returns the original file name for this page.
     *
     *  differs Since browsers do not give the full path of an imported file for security reasons, this method just returns the filename of the original imported file, if any (similarly to getOriginalFileName).
     *
   * @beta
   * @public
     */
    getOriginalFilePath(): string;
    /**
     * see {@link IPage.getOriginalFilePath}
     *
   * @beta
   * @public
     */
    readonly originalFilePath: string;
    
    /**
     * Adds a new Block Arrow type annotation, configured according to the provided annotationProperties.
     *
     * Available properties for all annotations include the following:
     *  - xpos: float  The X position of the annotation as a percentage of the width of the page (range 1-100)
     *  - ypos: float  The Y position of the annotation as a percentage of the height of the page (range 1-100)
     *  - width: float  The width of the annotation as a percentage of the width of the page (range 1-100)
     *  - height: float  The height of the annotation as a percentage of the height of the page (range 1-100)
     *  - fillColor: string  The hex rgb value of the fill color of the annotation (e.g. #00ffee)
     *  - fillOpacity: float  The opacity of the annotation fill (range 0-1)
     *  - outlineWidth: int  The width of the outline of the annotation
     *  - outlineColor: string  The hex rgb value of the outline color of the annotation (e.g. #00ffee)
     *  - outlineOpacity: float  The opacity of the outline of the annotation (range 0-1)
     *  - rotation: unsigned int  The rotation of the annotation in degrees
     *  - zOrder: unsigned int  The z order of the annotation. A value of 0 represents the annotation that is furthest back
     *  - displayText: string  The text that is to be displayed over the fill of the annotation
     *  - fontSize: unsigned int  The font size of the annotation text, expressed in points
     *  - fontFamily: enum AnnotationTextFontFamily  The font family of the annotation text
     *  - horizontalTextAlignment: enum AnnotationTextAlignment  The horizontal alignment of the annotation text on the annotation fill (options: LEFT, CENTER, RIGHT)
     *  - verticalTextAlignment: enum AnnotationTextAlignment  The vertical alignment of the annotation text on the annotation fill (options: TOP, CENTER, BOTTOM)
     *  - textColor: string  The hex rgb value of the annotation text color (e.g. #00ffee)
     *
     * Properties specific to the Block Arrow annotation type include:
     *  - arrowSize: float  The position of the arrow base. Ranges from 0 to 1 with 0 meaning the arrow base is on the side opposite the arrow tip
     *  and 1 meaning the arrow base is on the arrow tip
     *  - lineSize: float  The size of the arrow's body. Values in [0,1], 0 corresponding to a zero width arrow body and 1 corresponding to
     *  the maximum body size (i.e. the full length of the side on which the arrow tip rests)
     *  - orientation: AnnotationArrowOrientation (<b>mandatory</b>) The orientation of the arrow annotation. Available options are LEFT, UP, RIGHT, DOWN.
     *
     * @param annotationProperties - the IAnnotationProperties with the configuration for the annotation to be created
     *
     * @public
     */
    createBlockArrowAnnotation(annotationProperties: IAnnotationProperties): IAnnotation;
    /**
     * Adds a new Ellipse type annotation, configured according to the provided annotationProperties.
     *
     * For general annotation properties view the {@link IPage.createBlockArrowAnnotation}.
     *
     * @param annotationProperties - the IAnnotationProperties with the configuration for the annotation to be created
     * @returns TCAnnotation
     *
     * @public
     */
    createEllipseAnnotation(annotationProperties: IAnnotationProperties): IAnnotation;
    /**
     * Adds a new Image type annotation, configured according to the provided annotationProperties.
     *
     * For general annotation properties view the {@link IPage.createBlockArrowAnnotation}.
     * The Image type annotation supports <b>only</b> the following:
     *  - xpos
     *  - ypos
     *  - width
     *  - height
     *  - rotation
     *  - zOrder
     *
     * Properties specific to the Image annotation type include:
     *  - rubberstampPath: AnnotationRubberstamp | string (<b>mandatory</b>) Either one of the default rubberstamp images provided by the enumeration
     *  or your own custom image path. Custom images are to be added under the WEB-INF/rubberstamps directory of the HTML Service
     *  webapp and the path you provide must be relative to that directory. Also please view the index.txt file inside that directory
     *  for information on how to manage custom image annotations.
     *
     * Please note that the width and height of a rubberstamp annotation work differently than for the rest.
     * Due to the need to keep a constant aspect ratio between the two values, <b>only one of the provided sizes</b> is taken into consideration.
     * If the page's aspect ratio is greater than 1 then <b>the annotation width becomes relative to the annotation height</b>.
     * Otherwise the relation is inverted.
     *
     * @param annotationProperties - the IAnnotationProperties with the configuration for the annotation to be created
     *
     * @public
     */
    createImageAnnotation(annotationProperties: IAnnotationProperties): IAnnotation;
    /**
     * Adds a new Rectangle type annotation, configured according to the provided annotationProperties.
     *
     * For general annotation properties view the {@link IPage.createBlockArrowAnnotation}.
     *
     * Properties specific to the Image annotation type include:
     *  - arcRadius: float  The arc radius of the rectangle rounded corners. The value is a percentage
     *  of the width of the annotation (range 0-0.5)
     *
     * @param annotationProperties - the IAnnotationProperties with the configuration for the annotation to be created
     *
     * @public
     */
    createRectangleAnnotation(annotationProperties: IAnnotationProperties): IAnnotation;
    /**
     * Adds a new Redaction type annotation, configured according to the provided annotationProperties.
     *
     * For general annotation properties view the {@link IPage.createBlockArrowAnnotation}.
     * The Redaction type annotation supports <b>only</b> the following:
     *  - xpos
     *  - ypos
     *  - width
     *  - height
     *  - rotation
     *  - zOrder
     *
     * @param annotationProperties - the IAnnotationProperties with the configuration for the annotation to be created
     *
     * @public
     */
    createRedactionAnnotation(annotationProperties: IAnnotationProperties): IAnnotation;
    /**
     * Adds a new TextBox type annotation, configured according to the provided annotationProperties.
     *
     * For general annotation properties view the {@link IPage.createBlockArrowAnnotation}.
     * The TextBox type annotation supports <b>only</b> the following:
     *  - xpos
     *  - ypos
     *  - width
     *  - height
     *  - rotation
     *  - zOrder
     *  - displayText (<b>mandatory</b>)
     *  - fontSize
     *  - fontFamily
     *  - horizontalTextAlignment
     *  - verticalTextAlignment
     *  - textColor
     *
     * @param annotationProperties - the IAnnotationProperties with the configuration for the annotation to be created
     *
     * @public
     */
    createTextBoxAnnotation(annotationProperties: IAnnotationProperties): IAnnotation;
    /**
     * Adds a new Triangle type annotation, configured according to the provided annotationProperties.
     *
     * For general annotation properties view the {@link IPage.createBlockArrowAnnotation}.
     * The Triangle annotation does <b>not</b> support text related properties:
     *  - displayText
     *  - fontSize
     *  - fontFamily
     *  - horizontalTextAlignment
     *  - verticalTextAlignment
     *  - textColor
     *
     * Properties specific to the Image annotation type include:
     *  - baseLength: float  The length of the base of the triangle. A percentage of the annotation total width
     *  - vertexPosition: float  The position of the vertex opposite the triangle's base. A percentage of the annotation total width
     *
     * @public
     */
    createTriangleAnnotation(annotationProperties: IAnnotationProperties): IAnnotation;
    /**
     * Removes the provided annotation from the page.
     *
     * @param annotation - the IAnnotation to be removed
     *
     * @public
     */
    removeAnnotation(annotation: IAnnotation): void;
    /**
     * Returns a promise that will complete once this page's resource has finished uploading
     * to the server. The promise will resolve, as true if the image uploaded successfully and as
     * false if it didn't.
     *
     * @public
     * @beta
     */
    awaitUpload(): Promise<boolean>;
    /**
     * Returns a promise that will complete once this page's respective image thumbnail rendition
     * becomes available to the client. Any rendition will do, independent of the size.
     *
     * @public
     * @beta
     */
    awaitRendition(): Promise<void>;
    /**
     * Returns the original file <b>mime</b> type for this page.
     * The type is detected via content inspection and not by the file extension.
     *
     * @public
     */
    getOriginalFileMimeType(): FileMimeType;
    /**
     * see {@link IPage.getOriginalFileMimeType}
     *
     * @public
     */
    originalFileMimeType: FileMimeType;
    /**
     * Returns the original file size for this page.
     *
     * Note that the size returned is of the <b>whole</b> original file
     * and not just the part of the file represented by this page.
     *
     * @returns number
     *
     * @public
     */
    getOriginalFileSize(): number;
    /**
     * see {@link IPage.getOriginalFileSize}
     *
     * @public
     */
    originalFileSize: number;
    /**
     * Checks if Ocr data is available for the specific page.
     *
     * @public
     */
    hasOcrData(): boolean;
    /**
     * Attempts to generate Ocr data for this page. If the data already exists,
     * no generation attempt will occur.
     * The Ocr data generation gets queued along with other such tasks and
     * happens asynchronously.
     * This method returns a Promise that needs to be handled.
     * Successful generation will resolve the Promise whereas a failure will reject it.
     *
     * @param ocrConfiguration - Optional configuration to be used by the Ocr engine for this specific Ocr generation process.
     *
     * @public
     */
    generateOcrData(ocrConfiguration?: IOCRConfiguration): Promise<void>;
    /**
     * Removes the Ocr data generation task of this page from the queue.
     * Note that if the task has already been sent to the server then
     * generation will proceed as normal.
     *
     * @public
     */
    cancelOcrDataGeneration(): void;
}

export declare namespace IPage {
    /**
     * Describes the side of this Page in the original paper Document.
     *
     * @beta
     * @public
     */
    export enum Side {
        /**
         * @public
         * @beta
         */
        FRONT = 0,
        /**
         * @public
         * @beta
         */
        BACK = 1
    }
}

/**
 * Signature information of a PDF file.
 *
 * @public
 * @beta
 */
declare interface IPdfSigInfo {
    /**
     * True when the signature is valid (DOES NOT SPECIFY TRUST!)
     *
     * @public
     * @beta
     */
    valid: boolean;
    /**
     * Signature type (e.g. "adbe.pkcs7.sha1")
     *
     * @public
     * @beta
     */
    type: string;
    /**
     * Certificate Issuer Common Name (name of certificate issuer)
     *
     * @public
     * @beta
     */
    issuerCN: string;
    /**
     * Certificate Subject Common Name (name of certificate owner)
     *
     * @public
     * @beta
     */
    subjectCN: string;
    /**
     * Certificate Subject E-mail (email of certificate owner) if present
     *
     * @public
     * @beta
     */
    subjectE: string;
    /**
     * Signature timestamp
     *
     * @public
     * @beta
     */
    sigDate: Date;
    /**
     * True when signed timestamps exist (from time-stamping services)
     *
     * @public
     * @beta
     */
    withSignedTimestamps: boolean;
    /**
     * Signed timestamp info
     *
     * @public
     * @beta
     */
    timestamps: ITST[];
    /**
     * True when at least one externally signed timestamp has been validated
     *
     * @public
     * @beta
     */
    withValidatedTimestamp: boolean;
    /**
     * Certificate Issuer X.500 Relative Distinguished Names
     *
     * @public
     * @beta
     */
    issuerRDNs: IRelDN[];
    /**
     * Certificate Subject X.500 Relative Distinguished Names
     *
     * @public
     * @beta
     */
    subjectRDNs: IRelDN[];
    /**
     * If not null or empty, a description of the error (exception) causing failure to process the signature
     *
     * @public
     * @beta
     */
    errorMsg: string;
}

/**
 * @public
 */
export declare interface IProcessingParameters {
    /**
     * Model schema version
     *
     * Default: 1
     * @public
     */
    version?: 1;
    /**
     * The input options applied to image based files before processing.
     * @public
     */
    input?: {
        /**
         * Specific options for raster images (tif, jpg, etc)
         * @public
         */
        raster?: {
            /**
             * Used for images that have no dpi information.
             *
             * Defaults to 300
             * @public
             */
            defDpi?: number;
            /**
             * Allows reducing the image color mode.
             *
             * Defaults to "NONE"
             * @public
             */
            colorReduce?: "NONE" | "GRAY" | "BINARY_WITH_DITHERING" | "BINARY_WITHOUT_DITHERING";
        };
        /**
         * Options regarding PDF input pages.
         * @public
         */
        pdf?: {
            /**
             * Defines whether the PDF pages will be rasterized as images.
             *
             * Using the value DEFER, the images will not be rasterized by default.
             *
             * Default value: DEFER
             * @public
             */
            rasterize?: "ALWAYS" | "DEFER";
            /**
             * Options regarding the rasterization of PDF pages.
             * @public
             */
            rasterizeOptions?: {
                /**
                 * The target color mode for rasterization.
                 *
                 * Default value: COLOR
                 * @public
                 */
                colorMode?: "COLOR" | "GRAY" | "BINARY_WITH_DITHERING" | "BINARY_WITHOUT_DITHERING";
                /**
                 * The target DPI for <b>vector</b> based PDF pages.
                 *
                 * Note that image based PDF pages (i.e. pages that contain a a whole image) will
                 * come with their existing DPI.
                 *
                 * Default value: 300
                 * @public
                 */
                dpi?: number;
            };
        };
    };
    /**
     * Options concerning the output file.
     * Depending on the output format different options apply.
     * @public
     */
    output?: {
        /**
         * The list of annotations that will be visible on the page. This includes redaction annotations.
         *
         * Defaults to empty array.
         * @public
         */
        annotations?: Array<IAnnotation>;
        /**
         * Options used in case OCR is needed (output.pdf.raster.addTextLayer=true)
         * @public
         */
        ocrConfiguration?: IOCRConfiguration;
        /**
         * Options regarding PDF file output.
         * @public
         */
        pdf?: {
            /**
             * These options apply when the <b>input</b> image for the page is a raster <b>image</b>.
             * This does not mean that the input file is a raster file. It is possible to provide
             * a PDF input file that contains only images. Such a file is also treated as a raster input.
             * @public
             */
            raster?: {
                /**
                 * The rendering mode for PDF annotations.
                 *
                 * Default value: PDF_NATIVE
                 * @public
                 */
                annotationsMode?: "BURN" | "PDF_NATIVE" | "PDF_OVERLAY";
                /**
                 * Defines whether a searchable PDF will be produced.
                 * Usually this means that OCR will be executed on the raster input pages.
                 * It is possible however that
                 *
                 * Default value: false
                 * @public
                 */
                addTextLayer?: boolean;
                /**
                 * Options regarding the text layer generation in case that is required.
                 * @public
                 */
                textLayerOptions?: {
                    /**
                     * If the input is a <b>searchable</b> PDF file (i.e. a PDF file whose pages contain a single image
                     * and a text layer representing the image text) then it is possible to bypass executing OCR for the
                     * images but use the existing text layer instead.
                     *
                     * Default value: true
                     * @public
                     */
                    useExistingForSearchablePdf?: boolean;
                };
            };
            /**
             * Options when input page is a <b>vector</b> PDF file (e.g. a Word document saved as PDF).
             * These options will apply if the input PDF pages have <b>not</b> been rasterized already
             * (e.g. using the client Rasterize Page operation).
             * @public
             */
            vector?: {
                /**
                 * The rendering mode for PDF annotations.
                 *
                 * Note that burning annotations is <b>not</b> allowed on vector PDF files.
                 *
                 * Default value: PDF_NATIVE
                 * @public
                 */
                annotationsMode?: "PDF_NATIVE" | "PDF_OVERLAY";
            };
        };
        /**
         * Options regarding TIF file output.
         * @public
         */
        tif?: {
            /**
             * Image color compression format.
             *
             * Default value: JPEG
             * @public
             */
            colorCompression?: "JPEG" | "LZW" | "NONE";
        };
    };
}

/**
 * Models a recognition profile.
 *
 * @beta
 * @public
 */
export declare interface IRecognitionProfile {
    /**
     * Returns the name of the profile
     * @public
     * @beta
     *
     */
    getName(): string;
    /**
     * see {@link IRecognitionProfile.getName}
     * @public
     * @beta
     *
     */
    readonly name: string;
    /**
     * Returns the engine that performs the extraction/recognition
     * @public
     * @beta
     *
     */
    getRecognitionEngine(): RecognitionEngine;
    /**
     * see {@link IRecognitionProfile.getRecognitionEngine}
     * @public
     * @beta
     *
     */
    readonly recognitionEngine: RecognitionEngine;
}

/**
 * @public
 * @beta
 */
export declare interface IRectangle {
    /**
   * @public
   * @beta
   */
    y: number;
    /**
   * @public
   * @beta
   */
    x: number;
    /**
   * @public
   * @beta
   */
    width: number;
    /**
   * @public
   * @beta
   */
    height: number;
}

/**
 * An X.500 Relative Distinguished Name
 *
 * @public
 * @beta
 */
declare interface IRelDN {
    /**
     * RDN key or, if no friendly name found, the OID (e.g. "OU" or "2.5.4.11")
     *
     * @public
     * @beta
     */
    key: string;
    /**
     * RDN value
     *
     * @public
     * @beta
     */
    value: string;
}

/**
 * @public
 */
export declare interface IRubberBandOCRResult {
    /**
     * The confidence percentage of the result.
     *
     * @public
     */
    confidence: number;
    /**
     * The detected text.
     *
     * @public
     */
    value: string;
    /**
     * The rectangle surrounding the OCR result.
     * Contains the following properties:
     *  x: number
     *  y: number
     *  width: number
     *  height: number
     *
     *  @public
     */
    rect: IRectangle;
}

/**
 * author: kpentaris
 * date: 25-Oct-18
 */
/**
 * Custom type representing a scanner that is available to the workstation.
 *
 * @public
 */
export declare type IScanner = {
    /**
     * Indicates if the scanner is connected.
     */
    connected: boolean;
    /**
     * The scanner name, as it appears in related dialogs.
     */
    scannerName: string;
};

/**
 * Describes the characteristics of a scan operation.
 *
 * @beta
 * @public
 */
export declare interface IScanProfile {
    /**
     * Returns the name of this Scan Profile.
     *
     * If this is the default Scan Profile that gets created automatically, then
     * this method will return <code>"Default Scan Profile"</code>. This will return
     * the same String that is displayed on the ImageTrust client bar,
     * when this Scan Profile is used.
     *
     * @returns the name of this Scan Profile
     *
     * @beta
   *
   * @public
     */
    getName(): string;
    /**
     * see {@link IScanProfile.getName}
     *
     * @beta
   * @public
     */
    readonly name: string;
    /**
     *
     * The name of the scanner of this Scan Profile
     *
     *  notexists
     *  notexists
     *
     * @beta
   * @public
     */
    getScanner(): string;
    /**
     * see {@link IScanProfile.getScanner}
     *
     * @beta
   * @public
     */
    readonly scanner: string;
    /**
     * Returns the scan source for this Scan Profile.
     * @returns the scan source for this Scan Profile
     *
     * @beta
   * @public
     */
    getSource(): ScanSource;
    /**
     * see {@link IScanProfile.getSource}
     *
     * @beta
   * @public
     */
    readonly source: ScanSource;
    /**
     * Returns scanner custom data. This is binary data read from the TWAIN interface and used to
     * initialize the scanner.
     *
     *  differs returns a Byte[] instead of a Blob
     *  differs returns a Byte[] instead of a Blob
     *
     * @returns scanner custom data
     *
     * @beta
   * @public
     */
    getCustomData(): Blob;
    /**
     * see {@link IScanProfile.getCustomData}
     *
     * @beta
   * @public
     */
    readonly customData: Blob;
}

/**
 * @public
 */
declare interface ISearchListener {
    /**
     * The search mode has been activated
     *
     * @public
     */
    searchModeActivated?(): void;
    /**
     * The search mode has been deactivated
     *
     * @public
     */
    searchModeDeactivated?(): void;
}

/**
 * Represents a Stack within a Batch in the ImageTrust system.
 *
 * <b>Note</b>: Write-access to properties depends on the context in which the model is used. When
 * in a read-only context, `set*` methods will throw an `UnmodifiableException`.
 *
 * @beta
 * @public
 */
declare interface IStack extends INode {
    
    
}

/**
 * @public
 */
export declare interface ITCDispatch extends IDispatch {
    /**
     * AppEvents
     *
     * @public
     */
    AppEvents: IAppEvents;
    /**
     * JobEvents
     *
     * @public
     */
    JobEvents: IJobEvents;
    /**
     * @public
     */
    Const: typeof ScriptResultConsts;
    /**
     * @public
     */
    BarcodeType: typeof BarcodeType;
    /**
     * @public
     */
    BarcodeOrientation: typeof BarcodeOrientation;
    /**
     * @public
     */
    BarcodeThresholdMode: typeof BarcodeThresholdMode;
    /**
     * @public
     */
    RecognitionEngine: typeof RecognitionEngine;
    /**
    * @public
    */
    ScanSource: typeof ScanSource;
    /**
     * @public
     */
    SeparationAction: typeof SeparationAction;
    /**
    * @public
    */
    IPage: {
        Side: typeof IPage.Side;
    };
    /**
     * @public
     */
    ImageColorMode: typeof ImageColorMode;
    /**
   * @public
   */
    PageSize: typeof PageSize;
    /**
   * @public
   */
    PageOrientation: typeof PageOrientation;
    /**
   * @public
   */
    PageSideMode: typeof PageSideMode;
    /**
   * @public
   */
    LevelName: typeof LevelName;
    /**
   * @public
   */
    ActionType: typeof ActionType;
    /**
   * @public
   */
    ViewType: typeof ViewType;
    /**
   * @public
   */
    FileMimeType: typeof FileMimeType;
    /**
   * @public
   */
    FileType: typeof FileType;
    /**
   * @public
   */
    ClientRequestType: typeof ClientRequestType;
    /**
   * @public
   */
    ScanService: typeof ScanService;
    /**
   * @public
   */
    AnnotationTextFontFamily: typeof AnnotationTextFontFamily;
    /**
   * @public
   */
    AnnotationTextAlignment: typeof AnnotationTextAlignment;
    /**
   * @public
   */
    AnnotationArrowOrientation: typeof AnnotationArrowOrientation;
    /**
   * @public
   */
    NuanceLanguage: typeof NuanceLanguage;
    /**
   * @public
   */
    NuanceEngine: typeof NuanceEngine;
    /**
   * @public
   */
    NuanceMode: typeof NuanceMode;
    /**
     * the current batch.
     *
     * @public
     */
    currentBatch: IBatch;
    /**
     * Client log method.
     * All integration code logs should go through this method instead of console.log.
     * This method is bound to internal loggers with additional functionality such as
     * logging to server etc.
     *
     * @param msg
     *
     * @public
     */
    log(msg: string): void;
    /**
     * Retrieves the available scan profiles in their serialized form.
     *
     * @returns the serialized scan profiles.
     *
     * @public
     */
    getScanProfilesSchema(): Promise<ScanProfileSchema[]>;
    /**
     * Retrieves all the available scan profiles.
     *
     * @returns an array of scan profiles.
     *
     * @public
     */
    getScanProfiles(): IScanProfile[];
    /**
     * Retrieves the currently selected scan profile.
     *
     * @returns the current scan profile.
     *
     * @public
     */
    getCurrentScanProfile(): IScanProfile;
    /**
     * Removes that provided scan profile from the available profiles.
     *
     * @param scanProfile -  the scan profile to be removed
     * @returns true if the profile was successfully removed and false if it wasn't.
     *
     * @public
     */
    removeScanProfile(scanProfile: IScanProfile): Promise<boolean>;
    /**
     * Sets the application's selected scan profile.
     *
     * @param name - can be either the scan profile's name as a string or the scan profile object itself.
     *
     * @public
     */
    setCurrentScanProfile(name: string | IScanProfile): void;
    /**
     * Sets the application's available scan profiles.
     * A scan profile object must abide by the following schema:
     *
     *  ScanProfile: \{
     *      "name": string, Scan profile name. If providing multiple profiles, the name of each must be unique.
     *      "description": string, A description for the profile.
     *      "source": enum, a value from the ScanSource enumeration.
     *      "scanner": string, Name of the scanner as string.
     *      "CustomData": string The string of the scanner configurations, as is received when calling getScanProfilesSchema().
     *  \}
     *
     * @param scanProfiles - scanProfiles An array of scan profile objects that conform to the above rules.
     * @param selected - selected The name of the scan profile that you want to be selected after the initialization.
     * @returns This is an asynchronous operation and returns a Promise object to allow proper handling.
     *
     * @public
     */
    setScanProfiles(scanProfiles: ScanProfileSchema[], selected: string): Promise<void>;
    /**
     * Opens the scan profiles edit dialog.
     *
     * @public
     */
    invokeScanProfilesEditDialog(): void;
    /**
     * Opens the scan profile selection dialog.
     * Can optionally receive an HTMLElement to anchor the dialog on to.
     *
     * @param el - optional HTMLElement
     *
     * @public
     */
    invokeScanProfileSelectionDialog(el?: HTMLElement): void;
    /**
     * Starts the 'Scan' operation (as if the 'Scan' button is pressed).
     *
     * @public
     */
    scan(): Promise<void>;
    /**
     * Starts the 'Scan All and Append' operation
     *
     * @public
     */
    scanAllAndAppend(): Promise<void>;
    /**
     * Starts the 'Scan Single and Append' operation
     *
     * @public
     */
    scanSingleAndAppend(): Promise<void>;
    /**
     * Starts the 'Scan and Replace Pages' operation
     * Can optionally receive a {@link IDocument} or {@link IPage} array that
     * represent the nodes to be replaced
     *
     * @param nodes -  larray of {@link IDocument} or {@link IPage} objects to be replaced
     * by the scanned pages
     *
     * @public
     */
    scanAndReplacePages(nodes?: Array<IDocument | IPage>): Promise<void>;
    /**
     * Starts the 'Scan and Insert Pages' operation. Optionally receives a {@link IDocument} or {@link IPage}
     * object as an argument to programmatically force the node to prepend.
     *
     * @param node - optionally the node (document or page) we want to insert to
     *
     * @public
     */
    scanAllAndInsert(node?: IDocument | IPage): Promise<void>;
    /**
     * Starts the 'Scan Single and Insert' operation. As with {@link ITCDispatch.scanAllAndAppend}, it
     * can optionally receive a {@link IDocument} or {@link IPage} type object to prepend
     * the scanned pages
     *
     * @param node - optionally the node (document or page) we want to insert to
     *
     * @public
     */
    scanSingleAndInsert(node?: IDocument | IPage): Promise<void>;
    /**
     * Loads the field types that will be used by the application when in indexing mode.
     * See {@link FieldTypeSchema} for expected propeties.
     * @param job - an object conforming to {@link FieldTypeSchema}
     *
     * @public
     */
    setFieldTypes(fieldTypes: FieldTypeSchema[]): Promise<void>;
    /**
     * Loads the job that will be used by the application when creating Batches.
     * See {@link JobSchema} for expected propeties.
     * @param job - an object conforming to {@link JobSchema}
     *
     * @public
     */
    setJob(job: JobSchema): Promise<void>;
    /**
     * Import a document into ITH. This method will transfer the binary file that represents the document
     * (PDF, multi-tif, etc)
     * on the server, it will get analyzed and a new {@link IDocument} object will be created. For each page
     * in the document a new
     * {@link IPage} will be added to the returned document.
     * <p>
     * If the <code>parentOrSibling</code> parameter is a:
     * <ul>
     *   <li>{@link IBatch}, then the new document will be added as the first child of the batch, or the first
     *   child of the first folder of the batch, or the first child of the first stack of the first folder of the batch.
     *   If no stack/folders exist, one will be created, if the job that the batch belongs to
     *     uses stacks/folders.</li>
     *   <li>{@link IStack}, then the new document will be added as the first child of the first folder of this stack.
     *   <li>{@link IFolder}, then the new document will be added as the first child of the folder</li>
     *   <li>{@link IDocument}, then the new document will be added as the next sibling of the document
     * </ul>
     *
     * Please note that using this method will <b>not</b> trigger page separation, barcode recognition and other
     * Job related logic.
     * This method simply imports a file as a new {@link IDocument} into the system. Any required manipulations must
     * be done manually.
     * Use this method if you need to introduce a file into the system and have total control of what happens
     * to it regardless of the
     * existing business logic that is supplied to the application by the job and scripts.
     *
     * If you need to programmatically import a file that needs to go through the existing business logic then use the
     * {@link ITCDispatch.importAllAndAppend} or similar methods.
     *
     * @param parentOrSiblingNode - this is the node, below which the document
     *
     * @param url - this is the URL that the imported file can be accessed. It may either be an http or https URL, if the
     *   file is accessible from the browser (fileProvider == "client" or undefined), else it may be any arbitrary
     *   URL that is parsed by the server-invokable file provider.
     *
     * @param fileProvider - a FileProvider type that resolves the fileName attributes of the Page nodes as follows:
     *
     *    - "client": the fileName attribute represents http(s) URLs which are being downloaded by the browser
     *       and then uploaded to the server
     *    - "server-http": the fileName attribute represents http(s) URLs which are sent to the server and
     *       then get download by the server
     *    - "server-fs": the fileName attribute represents absolute file paths on the server file system: they
     *       are sent to the server and get copied by the server
     *    - "<plugin-in-file-provider-name>": any other provider that has been installed on the server. In that
     *       case the resolution of the fileName (e.g., what it represents) is up to the plugin.
     *
     *    In the first 3 cases, the URL may also have a trailing vertical bar and a number, which represents
     *    a zero-index based page number, if the fileName represents a multi-image file (e.g. multi-tif or PDF file).
     *    For example: "http://www.domain.com/file.pdf|1" for the 2nd page of the file.pdf file.
     *    Default: "client"
     * @param fileName - optional file name in case the file comes from a URL or other source that doesn't contain the
     *    name. The provided name will be used if the file is re-downloaded directly from the client.
     * @returns the {@link IDocument} that was added to the batch.
     *
     * @public
     */
    importDocument(parentOrSiblingNode: IBatch | IStack | IFolder | IDocument, url: string, fileProvider?: FileProvider, fileName?: string): Promise<IDocument>;
    /**
     * Similar to {@link ITCDispatch.importAllAndAppend} but for a single file.
     * @param url - see {@link ITCDispatch.importAllAndInsert}
     * @returns a list of imported pages
     *
     * @public
     */
    importSingleAndAppend(url: string, fileProvider: FileProvider): Promise<IPage[]>;
    /**
     * Similar to {@link ITCDispatch.importAllAndInsert} but appends files to the end of the batch.
     * @param files - see {@link ITCDispatch.importAllAndInsert}
     * @returns a list of imported pages
     *
     * @public
     */
    importAllAndAppend(files: [{
        url: string;
        fileProvider: string;
    }]): Promise<IPage[]>;
    /**
     * Similar to {@link ITCDispatch.importAllAndInsert} but works with a single file
     * @param node - IDocument | IPage see {@link ITCDispatch.importAllAndInsert}
     * @param url - see {@link ITCDispatch.importAllAndInsert}
     * @param fileProvider - see {@link ITCDispatch.importAllAndInsert}
     * @returns a list of imported pages
     *
     * @public
     */
    importSingleAndInsert(node: IDocument | IPage, url: string, fileProvider?: FileProvider): Promise<IPage[]>;
    /**
     * This method imports programmatically one or more files. It behaves exactly like the {@link ITCDispatch.scanAllAndInsert}
     * method, but
     * instead of invoking the internal action it performs the equivalent actions directly using the internal API.
     * <p>
     * All job-level separations, scripts
     * and related actions are executed in exactly the same manner as if the user was importing the files using
     * the user interface.
     *
     * @param node - IDocument | IPage the Document or Page to insert the files before. If node is undefined, then files
     * are appended to the end of the batch.
     * @param files - an array of \{url: string; fileProvider: string\} objects that describe each file to be imported:
     *   <br/>
     *   Each object has the following properties:
     *   <ul>
     *   <li>The `fileProvider` parameter takes the values as explained in the {@link ITCDispatch.importDocument} method.
     *   Default: "client"
     *   <li>The `url` parameter is the URL to get the file from (either from the client or the server).
     *   </ul>
     * @returns a list of imported pages
     *
     * @public
     */
    importAllAndInsert(node: IDocument | IPage, files: [{
        url: string;
        fileProvider: string;
    }]): Promise<IPage[]>;
    /**
     * Add a {@link IBatchListener}
     * @param listener - the listener function that implements the IBatchListener interface
     *
     * @public
     */
    addTCBatchListener(listener: IBatchListener): void;
    /**
     * Remove a {@link IBatchListener}
     * @param listener - the listener function that implements the IBatchListener interface
     *
     * @public
     */
    removeTCBatchListener(listener: IBatchListener): void;
    /**
     * Sets a callback function that will get executed each time a context menu (right click menu) is about to open
     * in order to give the opportunity to add any custom menu items and/or sub menus. The callback will get called with
     * two parameters, the <code>clickedNode</code> and the <code>selectedNodes</code> variables and it should return an
     * array of ICustomContextMenuItem.
     *
     * A {@link ICustomContextMenuItem} is just a simple object that contains properties for the title and an
     * optional function
     * that will get executed if the user selects the item (click), also optionally the item can become a submenu
     * by adding an <code>items</code> property of an array of {@link ICustomContextMenuItem} objects. Submenus
     * can be had recursively without
     * limit in the number of submenu levels.
     *
     * optional position property defines the ordering position of the menu item in the menu list. Omitting this property
     * will be displayed in the same order as they are in the array.
     *
     * @param callback - function that will get called each time a node-clicked context menu that is about to open and
     * return an array of custom menu items of type {@link ICustomContextMenuItem} to be added to the context menu.
     *
     * @public
     */
    setContextMenuCallback(callback: (clickedNode: INode, selectedNodes: INode[]) => ICustomContextMenuItem[]): void;
    /**
     * Prepares and downloads a multi-page file (PDF or multi-TIF) with all the pages that
     * are in the provided node(s).
     * The content of the file is provided in the callback function. Use the <code>setupXhr</code> callback function
     * to customize the type of the received data (e.g. if you want to get the data as a Blob).
     * @param nodes - the node or the list of nodes. The images of all the pages belonging to these nodes will be
     *   added to the document.
     * @param format - a string that denotes the required output format, accepts three values:
     *   <ul>
     *     <li><code>pdf</code>
     *     <li><code>tif</code>
     *     <li><code>unknown</code>: use this value to download an e-Document. This only works for a single
     *     EDoc type page node - if you use more in the first argument, the download will fail
     *   </ul>
     * @param setupXhr - callback function that gives the opportunity to configure the XMLHTTPRequest that is used to
     *   download the produced document. The callback function received a single parameter with the XMLHttpRequest
     *   prior to opening it. If no callback is set, the downloaded file will be provided as a string. In order to
     *   receive it as a Blob, a callback that sets the XMLHttpRequest.responseType = 'blob' is required.
     * @param processingParamsCallback - callback that is executed for each page that will be included in the document
     *   (this is the set of pages contained in the <code>nodes</code> first parameter).
     *   You may return a {@link IProcessingParameters} object for each {@link IPage} object that defines how
     *   its image is processed before being added to the document.
     * @returns the content of the document
     *
     * @public
     */
    downloadAsMultiDoc(nodes: INode | INode[], format: "pdf" | "tif", setupXhr?: (xhr: any) => void, processingParamsCallback?: (page: IPage, defaultParameters: IProcessingParameters) => IProcessingParameters): Promise<any>;
    /**
     * This method is similar to the {@link ITCDispatch.downloadAsMultiDoc} with the exception that it will not
     * download the actual document but instead will return the created document file information that allows
     * downloading of the document via the {@link ITCDispatch.downloadFile} method using the created URL.
     *
     * See {@link ITCDispatch.downloadAsMultiDoc} for description of the parameters.
     *
     * @returns prepared document information
     *
     * @public
     */
    prepareAsMultiDocFile(nodes: INode | INode[], format: "pdf" | "tif", processingParamsCallback?: (page: IPage, defaultParameters: IProcessingParameters) => IProcessingParameters): Promise<IDownloadInfo>;
    /**
     * Compatibility method. Calls {@link ITCDispatch.prepareAsMultiDocFile} but directly returns the file url.
     *
     * @returns the URL of the prepared document
     * @deprecated
     *
     * @public
     */
    prepareAsMultiDoc(nodes: INode | INode[], format: "pdf" | "tif", processingParamsCallback?: (page: IPage, defaultParameters: IProcessingParameters) => IProcessingParameters): Promise<string>;
    /**
     * Downloads the file that is represented by the provided URL string. The URL must be generated from the
     * {@link ITCDispatch.prepareAsMultiDocFile} method.
     *
     * @param url the file url
     * @param setupXhr - callback function that gives the opportunity to configure the XMLHTTPRequest that is used to
     *   download the produced document. The callback function received a single parameter with the XMLHttpRequest
     *   prior to opening it. If no callback is set, the downloaded file will be provided as a string. In order to
     *   receive it as a Blob, a callback that sets the XMLHttpRequest.responseType = 'blob' is required.
     * @returns the prepared file as a blob
     *
     * @public
     */
    downloadFile(url: string, setupXhr?: (xhr: any) => void): Promise<any>;
    /**
     * Downloads the original file that was used to produce the provided <code>page</code>.
     * This method is useful for retrieving the <b>original</b> files that were used to create Pages in the Batch.
     *
     * Original files always represent the files that were <b>imported</b> into the application by the user. These files
     * can be image files, PDF files or even electronic documents. A page is always associated with a file even if that
     * file is an electronic document. For example, if an encrypted PDF is imported (which is treated as an eDoc) and
     * is decrypted by the application in order to show its thumbnails, the produced pages will be associated with that
     * original encrypted PDF file even though they were not extracted <b>directly</b> from it.
     *
     * @param page - a batch page that originated from a file.
     * @param setupXhr - callback function that gives the opportunity to configure the XMLHTTPRequest that is used to
     *   download the produced document. The callback function received a single parameter with the XMLHttpRequest
     *   prior to opening it.
     * @returns the content of the file. If no XHR callback is set, the downloaded file will be provided as
     * a string. In order to
     *   receive it as a Blob, a callback that sets the XMLHttpRequest.responseType = 'blob' is required.
     */
    downloadOriginalFile(page: IPage, setupXhr?: (xhr: XMLHttpRequest) => void): Promise<Blob>;
    /**
     * Similar to the {@link ITCDispatch.downloadOriginalFile} method, but instead downloads the <b>source</b> file associated with
     * the provided page. The source file is the file that was used to extract the page from. Using the example from
     * {@link ITCDispatch.downloadOriginalFile}, the source file represents the <b>decrypted</b> PDF, i.e. the file from which the
     * page was extracted.
     *
     * @param page - the page that is associated with the source file
     * @param fileName - the filename of the source file
     * @param setupXhr - a callback to setup the xhr (XMLHttpRequest) object before executing the HTTP request
     */
    downloadSourceFile(page: IPage, setupXhr?: (xhr: XMLHttpRequest) => void): Promise<Blob>;
    /**
     * Provides a listener that will be triggered when http requests are dispatched by the application. The listener
     * will not be triggered on heartbeat
     * requests or requests that communicate with scanners/cct.
     * This functionality allows for monitoring of user activity and possibly reacting to inactive or overactive users.
     *
     * @param listener - listener to be triggered
     *
     * @public
     */
    registerHttpRequestListener(listener: (type: ClientRequestType) => void): void;
    /**
     * Removes a previously provided http request listener. Note that you must provide the same listener function()
     * object that was provided during
     * registration.
     *
     * @param listener - listener to be triggered
     *
     * @public
     */
    unregisterHttpRequestListener(listener: (type: ClientRequestType) => void): void;
    /**
     * Provides a listener that will be triggered when the application licensing state changes.
     *
     * @param listener
     *
     * @public
     */
    registerLicenseStateChangeListener(listener: (isLicensed: boolean) => void): void;
    /**
     * Removes a previously provided license state change listener. The <i>same</i> listener
     * function object must be provided in order for it to be properly removed.
     *
     * @param listener
     *
     * @public
     */
    unregisterLicenseStateChangeListener(listener: (isLicensed: boolean) => void): void;
    /**
     * Register a custom callback that will supply the processing parameters that will be used during
     * the creation of downloaded files.
     *
     * The callback will be called for each page of the created document providing you with more
     * fine grained control. The callback will be provided two arguments
     *  - page: The page that the options will be applied to
     *  - fileType: The type of file that will be created (PDF, TIF...)
     *
     * @param callback - callback that supplies the desired IProcessingParameters
     *
     * @public
     */
    registerProcessingParamsCallback(callback: (page: IPage) => IProcessingParameters): void;
    /**
     * Executes a method (operation) of a registered RPCExecutor on the server.
     * @param opName - the name of the operation
     * @param params - the parameters that will be passed to the operation. Normally a JSON-stringified
     *   object that may be parsed on the server and presented to the RPCExecutor as a Java object
     * @param pages - a {@link IPage} or a list of {@link IPage} objects to be passed on to the operation.
     *   On the server, you are able to get a list of the images that are associated with these page objects.
     * @param setupXhr - callback function that gives the opportunity to configure the XMLHTTPRequest that is used to
     *   execute the RPC and possibly handle its response type.
     * @returns any return value returned from the server will be returned as the
     *   resolution value of the promise
     *
     * @public
     */
    invokeOnServer(opName: string, params?: string, pages?: IPage | IPage[], setupXhr?: (xhr: any) => void): Promise<any>;
    /**
     * Executes a method (operation) of a registered RPCExecutor on the server.
     * @param opName - the name of the operation
     * @param params - the parameters that will be passed to the operation. Normally a JSON-stringified
     *   object that may be parsed on the server and presented to the RPCExecutor as a Java object.
     * @param setupXhr - callback function that gives the opportunity to configure the XMLHTTPRequest that is used to
     *   execute the RPC and possibly handle its response type.
     * @returns any return value returned from the server will be returned as the
     *   resolution value of the promise
     *
     * @public
     */
    invokeOnServerWithBatch(opName: string, params?: string, setupXhr?: (xhr: any) => void): Promise<any>;
    /**
     * Displays a notification message, anchored to the provided element. If no element is provided, the
     * notification is displayed at the bottom right of the application.
     * @param message - the message to be displayed in the notification panel
     * @param anchor - optional element to anchor the notification from
     *
     * @public
     */
    notify(message: string, anchor?: HTMLElement): void;
    /**
     * Display an information modal dialog with the provided message and title with an OK button.
     *
     * @param message - the message to be presented to the user
     * @param title - (optional) the title which the dialog window will have
     *
     * @public
     */
    inform(message: string, title?: string): Promise<IDialog.IResult>;
    /**
     * Display an alert modal dialog with the provided message and title with an OK button.
     *
     * @param message - the message to be presented to the user
     * @param title - (optional) the title which the dialog window will have
     *
     * @public
     */
    alert(message: string, title?: string): Promise<IDialog.IResult>;
    /**
     * Display prompt modal dialog with the provided message and title and with OK and Cancel buttons.
     *
     * @param message - the message to be presented to the user
     * @param title - (optional) the title which the dialog window will have
     * @returns true = user pressed OK, false user pressed Cancel
     *
     * @public
     */
    prompt(message: string, title?: string): Promise<boolean>;
    /**
     * Rasterizes a vector page.
     *
     * @param targetPages - the page(s) to rasterize
     * @param dpi - the DPI (Dots Per Inch) that would be used to calculate the resulting image resolution
     * @param maxEdgeSize
     * @param binaryDithering - If Binary Dithering should be applied or not
     * @param colorMode - What {@link ImageColorMode} should be used
     * @param pageSize - What {@link PageSize} should be used (for Office files with no pagination information)
     * @param pageOrientation - What {@link PageOrientation} should be used (for Office files with no pagination information)
     */
    rasterize(targetPages: IPage | IPage[], dpi?: number, maxEdgeSize?: number, binaryDithering?: boolean, colorMode?: ImageColorMode, pageSize?: PageSize, pageOrientation?: PageOrientation): Promise<void>;
    /**
     * Reverts the last image operation that has been applied to the provided {@link IPage} objects.
     * It is also possible to undo all applied operations and revert the {@link IPage} to its original state.
     *
     * @param targetPages - the pages whose operations will be undone
     * @param undoAll - if true, reverts pages to their original state
     */
    undoOperation(targetPages: IPage | IPage[], undoAll: boolean): Promise<void>;
    /**
     * Restores an image operation that has been undone to the provided {@link IPage} objects.
     *
     * @param targetPages - the pages whose operations will be restored
     */
    redoOperation(targetPages: IPage | IPage[]): Promise<void>;
    /**
     * Display a modal dialog with an indeterminate progress bar, a message and optionally a title. The
     * modal does not provide any type of action and stays open indefinitely. The function itself returns an
     * object with appropriate methods giving control over the modal and the progress bar itself.
     *
     * @param message - The message to be displayed over the progress bar
     * @param title - (optional) title to be displayed on the modal. Defaults to the product name
     * @param cancelCallback - Optional callback function that will be called if the progress dialog is manually closed
     * @returns an object that allows interfacing with the progress modal. Provides the following functionality:
     *  - closeFn: Function that closes the progress modal
     *
     * @public
     */
    indeterminateProgress(message: string, title?: string, cancelCallback?: () => void): IDialogProgress;
    /**
     * Display a modal dialog with a determinate progress bar, a message and optionally a title. The
     * modal does not provide any type of action and stays open indefinitely. The function itself returns an
     * object with appropriate methods giving control over the modal and the progress bar itself.
     *
     * @param message - The message to be displayed over the progress bar
     * @param title - Optional title to be displayed on the modal. Defaults to the product name
     * @param cancelCallback - Optional callback function that will be called if the progress dialog is manually closed
     * @returns an object that allows interfacing with the progress modal. Provides the following functionality:
     *  - updateProgress: Function that updates the progress bar to the given percentage. Takes a number
     *  between 0 and 100 and optionally a text message.
     *  - closeFn: Function that closes the progress modal
     *
     *  @public
     */
    determinateProgress(message: string, title?: string, cancelCallback?: () => void): IDialogProgress;
    /**
     * Adds and/or removes the main toolbar.
     * @param visible - boolean. true = add, false = remove
     *
     * @public
     */
    toggleToolbar(visible: boolean): void;
    /**
     * Adds and/or removes the Main Menu on main toolbar
     * @param visible - boolean. true = add, false = remove
     *
     * @public
     */
    toggleToolbarMainMenu(visible: boolean): void;
    /**
     * Adds and/or removes Tasks menu on main toolbar
     * @param visible - boolean. true = add, false = remove
     *
     * @public
     */
    toggleToolbarTasksView(visible: boolean): void;
    /**
     * Adds and/or removes Scan Profiles menu on main toolbar
     * @param visible - boolean. true = add, false = remove
     *
     * @public
     */
    toggleToolbarScanProfiles(visible: boolean): void;
    /**
     * Adds and/or removes Settings menu on main toolbar
     * @param visible - boolean. true = add, false = remove
     *
     * @public
     */
    toggleToolbarSettingsMenu(visible: boolean): void;
    /**
     * Adds and/or removes Batch Explorer
     * @param visible - boolean. true = add, false = remove
     *
     * @public
     */
    toggleToolbarBatchExplorer(visible: boolean): void;
    /**
     * Sets the thumbnail size on the multi-page viewer (a.k.a the Browse tab).
     * The size cannot exceed the respective slider zoom's range of values.
     * Also note that the size value will be normalized to match a value that
     * is possible to achieve via the slider as well (e.g. 112 will become 100).
     * @param number - size in pixels
     *
     * @public
     */
    setMultipageViewThumbnailSize(size: number): void;
    /**
     * Registers a callback that will be triggered whenever the user executes a Rubberband OCR action.
     * This will allow for handling of the OCR result through the {@link IRubberBandOCRResult} object.
     *
     * The handler provides a reference to the page that the rubberband action was triggered the result
     * of the action as well as the original band rectangle the was provided by the user.
     *
     * @param handler - a function that will handle the Rubberband OCR action
     *
     * @public
     */
    registerRubberbandOcrResultHandler(handler: (page: IPage, result: IRubberBandOCRResult, bandRect: IRectangle) => void): void;
    /**
     * Removes a previously registered Rubberband OCR action callback.
     *
     * @param handler - the function to be removed that has been registered with registerActionAllowCheck
     *
     * @public
     */
    unregisterRubberbandOcrResultHandler(handler: (page: IPage, result: IRubberBandOCRResult, bandRect: IRectangle) => void): void;
    /**
     * Registers an Action Allow Check function for a specific type of action. If the function returns false
     * then the action is not allowed and if it returns true it is. Note that returning nothing will be accounted
     * as returning false and the action will be blocked. You <b>must</b> return true if you want the action
     * to be available
     *
     * @param actionType - an {@link ActionType} enumeration constant
     * @param checkFunction - the callback of type ActionAllowChecker that will be used to check if
     * an action is allowed or not. Takes the <i>targetNode</i>, the <i>selectedNodes</i> array as arguments
     * and an extra <i>actionProperties</i> an {@link IActionProperties} object to allow for checking of
     * the current selections along with other useful related information.
     * Must return a boolean value: true = action available, false = action unavailable
     *
     * @public
     */
    registerActionAllowCheck(actionType: ActionType, checkFunction: ActionAllowChecker): void;
    /**
     * Removes the registered Action Check function of the given {@link ActionType}.
     *
     * If a checkFunction is provided, it must be a reference to the same function provided
     * during the {@link ITCDispatch.registerActionAllowCheck} call. Adifferent function with the same
     * signature will not be removed correctly.
     *
     * If a checkFunction is not provided, then all checkFunctions for the given {@link ActionType}
     * will be removed.
     *
     * @param actionType - an {@link ActionType} enumeration constant
     * @param checkFunction - (optional)  must be a reference to the same function object that was provided
     * in the registration
     * @returns true = the function was correctly removed, false = no function was removed
     *
     * @public
     */
    unregisterActionAllowCheck(actionType: ActionType, checkFunction?: ActionAllowChecker): boolean;
    /**
     * Toggles an action's menu visibility. Use this to hide actions you do not want to ever show to your users.
     * Actions that have dynamic availability should use the action allow check methods instead.
     *
     * @param actionType - an {@link ActionType} enumeration constant
     * @param visibility - whether the action will be visible in its containing menus or not
     *
     * @public
     */
    setActionVisibility(actionType: ActionType, visibility: boolean): void;
    /**
     * Returns the currently selected nodes as an array.
     *
     * @returns the currently selected nodes
     *
     * @public
     */
    getSelectedNodes(): INode[];
    /**
     * Provides the current Batch and Batch Explorer state as a Blob object.
     * This method allows for caching the state of the application with regards
     * to the batch in order to possibly restore it in the future.
     *
     * The provided state contains all the Batch information along with the
     * image resources of the Page objects.
     *
     * This method usage is paired with {@link ITCDispatch.setBatchState()}.
     *
     * <b>Important:</b>
     * The Blob object provided by this method should not be stored for
     * long term usage and its compatibility with future client versions
     * is not guaranteed.
     *
     * @return the Batch state as a Blob
     * @public
     */
    getBatchState(): Blob;
    /**
     * Sets the application state with regards to the Batch and the Batch Explorer.
     * The batchState should be a Blob object that was received by calling
     * {@link ITCDispatch.getBatchState()}.
     *
     * Calling this method directly sets the Batch along with all the Pages and the
     * images they point to. The images are directly fetched from the browser cache
     * if available and no thumbnail generation takes place since the thumbnails
     * have already been generated the <i>first time</i> the batch was loaded.
     *
     * This method should be called only after having used {@link ITCDispatch.getBatchState()}
     * and expects the aforementioned batch to <b>not</b> have been deleted
     * in the meantime (e.g. using the {@link ITCDispatch.deleteBatch()} method).
     * Deleting the batch purges all image caches, both client and server side,
     * thus <b>invalidating</b> any available batch states.
     *
     * Every time a <b>new</b> batch must be created but the previous batch states
     * must remain available then the new batch must <b>not</b> be created using
     * the {@link ITCDispatch.newBatch()} method which deletes the old batch.
     * Instead remove all the current batch children using the {@link ITCDispatch.deleteNodes()}
     * and create the new batch under the <b>same</b> {@link IBatch} node.
     *
     * An example usage of the batch state methods would be multiple batches need
     * to be handled while switching between them. Without using the state methods,
     * every time the user switches to a new batch then all image files of its
     * pages will have to be re-imported to the application, uploaded and thumbnails
     * must be generated creating huge downtime. Instead, using the state method,
     * it is possible to take advantage of the already generated thumbnails and image
     * caches to seamlessly transition between multiple batches.
     *
     * @param batchState
     * @public
     */
    setBatchState(batchState: Blob): Promise<void>;
    /*****************
     **** ACTIONS ****
     *****************/
    /**
     * Adds a new document in the provided parent.
     *
     * Note that if the Job uses folders, you must provide a folder type node.
     *
     * @param parent - Folder or Batch the document will be added at the end of.
     * @returns the newly created document.
     *
     * @public
     */
    appendNewDocument(parent: IFolder | IBatch): IDocument;
    /**
     * Adds a new folder to the selected batch. If no batch is provided then the value of {@link ITCDispatch.currentBatch}
     * will be used
     *
     * @param batch - optional parameter for the batch to add the folder to.
     * @returns reference to the added folder.
     *
     * @public
     */
    appendNewFolder(batch?: IBatch | IStack): IFolder;
    /**
     * Adds a new stack to the selected batch. If no batch is provided then the value of {@link ITCDispatch.currentBatch}
     * will be used.
     *
     * @param batch - optional parameter for the batch to add the stack to.
     * @returns reference to the added stack.
     *
     * @public
     */
    appendNewStack(parent?: IBatch): IStack;
    /**
     * Creates a new batch (as if the 'New Batch' button is pressed).
     *
     * @param force - boolean Denotes if the batch will be created without prompting
     * the user to select if he wishes to delete a current batch. By default the value
     * is true which means that a current batch will automatically be deleted.
     * Default: true
     *
     * @returns promise that resolves to the newly created batch.
     *
     * @public
     */
    newBatch(force?: any): Promise<IBatch>;
    /**
     * Deletes the active batch. Will not produce a prompt as does deletion via the context menu.
     * Note that the `batchWillClose` script will execute normally and its result might block the batch from closing.
     *
     * @public
     */
    deleteBatch(): Promise<void>;
    /**
     * Sets the currently selected node. Can also optionally set the view type (batch overview or page view).
     * If selecting a page view type it is possible to open the page in either a new page viewer
     * (using {@link ViewType.NEW_PAGE})
     * or open it in one of the active page viewers ({@link ViewType.ACTIVE_PAGE}). The selected viewer depends
     * on the value of the newPageIndex argument. If no value is provided or the value is invalid (i.e. bigger than the
     * currently active viewers) then the first viewer is chosen.
     *
     * Note that the page view supports multiple page viewers.
     *
     * @param INode - node
     * @param ViewType - viewType
     * @param number - newPageIndex
     *
     * @public
     */
    setSelectedNode(node: INode, viewType?: ViewType, newPageIndex?: number): void;
    /**
     * Panes the active page viewer in order to make the provided rectangle visible.
     *
     * If centered is false:
     * <ul>
     * <li>If the rectangle is already fully visible then no change happens.</li>
     * <li>If the rectangle is partially visible, it is brought wholly into view with minimal movement.</li>
     * <li>if the rectangle is not visible at all, the view moves in order to make it <b>centered</b>.</li>
     * </ul>
     * If centered is true:
     * The rectangle is brought to the view center, regardless of its previous position.
     *
     * @param rectangle - in relative coordinates
     * @param center -  default value is false
     *
     * @public
     */
    makeRectangleVisibleInView(rectangle: IRectangle, center?: boolean): void;
    /**
     *
     * Displays the page containing the supplied annotation in the active viewer, enables annotation editing
     * for that viewer and selects the annotation in it. Additionally, if a mouse event is provided it is
     * considered to be the mouse event that starts a dragging gesture for moving the annotation i.e. the annotation
     * is being dragged by the mouse until it is dropped (by a mouse release)
     *
     *
     * @param annotation
     *  The annotation to be selected in the active viewer.
     *
     * @param event
     *  An event that when provided is considered to be the event that initiates a dragging gesture to move the
     *  annotation around.
     *
     * @return
     *  Returns a promise that is only interesting in case the annotation was initially dragged. In this case the returned
     *  promise is resolved when the annotation is finally dropped by the user.
     *
     * @public
     */
    selectAnnotation(annotation: IAnnotation, event?: MouseEvent): Promise<void>;
    /**
     * Inserts a new document before the one provided as an argument.
     * Returns the newly created document.
     *
     * @param doc - the document before which we will be inserting the new one.
     * @returns reference to the newly created document.
     *
     * @public
     */
    addNewDocumentBefore(doc: IDocument): IDocument;
    /**
     * Appends a new document after the one provided as an argument.
     * Returns the newly created document.
     *
     * @param doc - the document that the function will <u>append</u> to.
     * @returns reference to the newly created document.
     *
     * @public
     */
    addNewDocumentAfter(doc: IDocument): IDocument;
    /**
     * Inserts a new folder before the one provided as an argument.
     * Returns the newly created folder.
     *
     * @param folder - the folder before which we will be inserting the new one.
     * @returns reference to the newly created folder.
     *
     * @public
     */
    addNewFolderBefore(folder: IFolder): IFolder;
    /**
     * Appends a new folder after the one provided as an argument.
     * Returns the newly created folder.
     *
     * @param folder - the folder that the function will <u>append</u> to.
     * @returns refernece to the newly created folder.
     *
     * @public
     */
    addNewFolderAfter(folder: IFolder): IFolder;
    /**
     * Inserts a new stack before the one provided as an argument.
     * Returns the newly created stack.
     *
     * @param stack - the stack before which we will be inserting the new one.
     * @returns reference to the newly created stack.
     *
     * @public
     */
    addNewStackBefore(stack: IStack): IStack;
    /**
     * Appends a new stack after the one provided as an argument.
     * Returns the newly created stack.
     *
     * @param stack - the stack that the function will <u>append</u> to.
     * @returns refernece to the newly created stack.
     *
     * @public
     */
    addNewStackAfter(stack: IStack): IStack;
    /**
     * Creates a new document that will contain the provided pages. The pages will be removed from their
     * initial document and will be
     * moved to the newly created one.
     *
     * @param pages - the pages that will comprise the new document.
     * @returns promise that resolves to the newly created document.
     *
     * @public
     */
    createDocumentFromSelectedPages(pages: IPage[]): Promise<IDocument>;
    /**
     * Deletes the provided nodes.
     *
     * @param sourceNodes - the nodes that will be deleted.
     * @returns promise that resolves after the action is complete.
     *
     * @public
     */
    deleteNodes(sourceNodes: INode[]): Promise<void>;
    /**
     * Duplicates the provided nodes.
     * Note that as with the context menu action, the new nodes will be appended to the last node
     * of the selection and not to their respective parents (in case they have different parents).
     *
     * @param nodes - an array of nodes to duplicate. This cannot be or contain a batch type node.
     * @returns promise that resolves to an array that contains the newly created nodes.
     *
     * @public
     */
    duplicateNodes(nodes: Array<IPage | IDocument | IFolder | IStack>): Promise<INode[]>;
    /**
     * Merges the selected nodes into one.
     * Note that all selected nodes will be merge on to the first node of the selection, thus maintaining their order.
     *
     * @param mergedNodes - the nodes that will be merged into one.
     * @returns promise that resolves after the action is complete. The merged node will be the first in
     * the provided array <code>mergedNodes</code>
     *
     * @public
     */
    mergeNode(mergedNodes: INode[]): Promise<void>;
    /**
     * Merges the provided node with its previous sibling.
     *
     * @param targetNode - the node that will disappear and its content will be added to its previous sibling.
     * @returns promise that resolves after the action is complete.
     *
     * @public
     */
    mergeWithPreviousNode(targetNode: INode): Promise<void>;
    /**
     * Merges the provided node with its next sibling.
     *
     * @param targetNode - the node that will disappear and its content will be added to its next sibling.
     * @returns promise that resolves after the action is complete.
     *
     * @public
     */
    mergeWithNextNode(targetNode: INode): Promise<void>;
    /**
     * Moves nodes to a target location. The type of nodes <b>being moved</b> (toBeMoved) must be of type
     * one level deeper than the node that <b>will receive them</b> (targetNode). You can move Pages to a Document
     * but not Pages to a Folder.
     *
     * You can optionally provide a beforeNode which must be of the same type as the toBeMoved nodes and a child
     * of the targetNode. The moved nodes will be land <b>before</b> that beforeNode.
     *
     * Note that this method executes asynchronously. If you want to chain methods after a move action
     * you have to handle the returned Promise object.
     *
     * @param targetNode - the new location that the nodes will end up in.
     * @param toBeMoved - the nodes that will be moved.
     * @param beforeNode - optional the node before which the toBeMoved nodes will be positioned
     * @returns promise that resolves after the action is complete.
     *
     * @public
     */
    moveNodes(targetNode: INode, toBeMoved: INode[], beforeNode?: INode): Promise<void>;
    /**
     * Splits the container of the provided node, at that node's position.
     * For example, if the provided node is a page, then a new document will be created right
     * next to the selected page's current parent and all the pages starting from the selected
     * one will be moved on to the new document.
     *
     * @param targetNode - the node where the split will happen.
     * @returns promise that resolves the the newly created node.
     *
     * @public
     */
    splitNode(targetNode: INode): Promise<INode>;
    /**
     * Rotates the page 90 degrees anti-clockwise.
     *
     * @param targetPages - the pages that will be rotated.
     * @returns promise that resolves after the action is complete.
     *
     * @public
     */
    rotatePage90DegLeft(targetPages: IPage | IPage[]): Promise<void>;
    /**
     * Rotates the page 90 degrees clockwise.
     *
     * @param targetPages - the pages that will be rotated.
     * @returns promise that resolves after the action is complete.
     *
     * @public
     */
    rotatePage90DegRight(targetPages: IPage | IPage[]): Promise<void>;
    /**
     * Rotates the page 180 degrees
     *
     * @param targetPages - the pages that will be rotated.
     * @returns promise that resolves after the action is complete.
     *
     * @public
     */
    rotatePage180Deg(targetPages: IPage | IPage[]): Promise<void>;
    /**
     * Performs a color inversion operation.
     *
     * @param targetPages - the page or pages to apply the operation
     * @returns {Promise} - promise that resolves after the action is complete.
     *
     * @public
     */
    invertPage(targetPages: IPage | IPage[]): Promise<void>;
    /**
     * Performs an image flip operation.
     *
     * @param targetPages - the page or pages to apply the operation
     * @param vertical - optional: true = flip vertically, false = flip horizontally. Default: false (horizontally)
     * @returns {Promise} - promise that resolves after the action is complete.
     *
     * @public
     */
    flipPage(targetPages: IPage | IPage[], vertical: boolean): Promise<void>;
    /**
     * Performs a despeckle operation on the target page(s).
     *
     * @param targetPages- to page or pages to apply the operation to
     *
     * @public
     */
    despecklePage(targetPages: IPage | IPage[]): Promise<void>;
    /**
     * Adjust image brightness/contrast on provided pages.
     *
     * @param targetPages- the page or pages to apply the operation to
     * @param brightness - can be a value between [-150,150]
     * @param contrast - can be a value between [-100,100]
     * @returns {Promise} - promise that resolves after the action is complete.
     *
     * @public
     */
    brightnessContrast(targetPages: IPage | IPage[], brightness: number, contrast: number): Promise<void>;
    /**
     * Straightens a skewed page.
     * The operation will only work for pages with skews between 0.1 and 10.0 degrees.
     *
     * @param targetPages - the page or pages to apply the operation
     *
     * @public
     */
    deskewPage(targetPages: IPage | IPage[]): Promise<void>;
    /**
     * Attempts to detect and remove black border noise. Typically appears from erroneous scanning.
     * Will not work if an excessive amount of the page (> 30%) is black.
     *
     * The black border can be either removed by filling it with white or cropping it out of the image.
     *
     * @param targetPages - the page or pages to apply the operation
     * @param blackBorderCrop - wheteher to crop or to fill in the borders. true = crops the borders off the page, false = fills in the borders.
     *
     * @public
     */
    removePageBlackBorder(targetPages: IPage | IPage[], blackBorderCrop: boolean): Promise<void>;
    /**
     * Attempts to detect and remove punch holes.
     * The operation parameters can be customized through the options argument.
     *
     * @param targetPages - the page or pages to apply the operation
     * @param options - operation options
     *
     * @public
     */
    fillPunchHoles(targetPages: IPage | IPage[], options: FillPunchHolesOptions): Promise<void>;
    /**
     * There are 2 ways to set a property for a {@link INode}:
     *   <ol>
     *   <li>Direct access to the property,
     *     e.g.: <code>aPage.properties.someprop = 'somevalue'</code></li>
     *   <li>Using the setProperty() method,
     *     e.g. <code>aPage.setProperty('someprop', 'somevalue')</code></li>
     *   </ol>
     * <p>
     * When using the second method, a <code>PropertyChangeEvent</code> is generated internally.
     * Using the first method (direct access) does not have this effect.
     * <br/>
     * This method can be used to define a property, e.g. 'someprop' to generate internally these
     * <code>PropertyChangeEvent</code> events, even if the first, direct access, method is used.
     * This is useful if a property is used internally to as part of a label of the interface (e.g.
     * if it is used as part of the node name displayed in the GUI), so it is automatically updated
     * when the property's value changes.
     *
     * <p>
     * For now, there is no way to listen for these <code>PropertyChangeEvent</code> events on the API level.
     *
     * <p>
     * Notice that this method works on the {@link INode} level, e.g. you cannot set a property to be watchable per-node;
     * instead a property can only be watched for a whole node level (e.g. for every document, every page, etc).
     * @param level - the {@link INode}s level to watch the property for
     * @param name - the name of the property to watch.
     *
     * @public
     */
    setWatchableProperty(level: LevelName, name: string): void;
    /**
     * Re-assign the names of the different node levels used in ITH.
     * Call it once for each level you need to reassign (for Folder, Document, Page levels).
     * @param level - the level name you want to re-assign (e.g. {@link LevelName.Folder})
     * @param expression - the new calculated name. May contain dynamic variables (e.g. $CurrentDate,
     *    $Index) and dynamic {@link INode} properties (e.g. $somepropertyname).
     *    Important: For dynamic custom properties the property name must be <i>all lowercase</i>
     *    <p>
     *    The expression is evaluated at runtime and may contain html content, although this
     *    might slow down the rendering of large batches.
     *    <p>
     *    The default names used in ITH are:
     *    <pre>
     *    Level        Default Name
     *    =========    ============
     *    Job          Job $Index
     *    Batch        Batch $Index
     *    Stack        Stack $Index
     *    Folder       Folder $Index
     *    Document     Document $Index ($ChildCount p.)
     *    Page         p. $Index
     *    </pre>
     *
     *    The available variable names are:
     *    <pre>
     * //general
     * ID, ParentID, Index, AbsoluteIndex, LevelName, ChildCount,
     *
     * //job
     * JobID, JobName,
     *
     * //batch
     * BatchID, BatchName, BatchDescription, BatchCreationDate,
     * BatchCreationTime
     *
     * //stack
     * StackID, StackIndex, StackAbsoluteIndex, StackCount,
     *
     * //folder
     * FolderID, FolderIndex, FolderAbsoluteIndex, FolderCount,
     *
     * //document
     * DocumentID, DocumentIndex, DocumentAbsoluteIndex, DocumentCount,
     *
     * //page
     * PageCount, PageIndex, PageAbsoluteIndex,
     *
     * //generic
     * CurrentDate, CurrentTime, UTCOffset, DSTOffset, UTCDSTOffset,
     * GUID, Empty
     *    </pre>
     *
     * Notice that the Job and Batch levels actually have <code>name</code>
     * properties that you can assign directly, instead of depending on the automatic
     * naming used here.
     * <p>
     * Remember that you can use index variables to customize the name of <b>each
     * separate node</b>, on top of customizing the naming of each level in a generic
     * way.
     *
     * @public
     */
    setLevelName(level: LevelName, expression: string): void;
    /**
     * Terminates and destroys the underlying work session.
     *
     * This method should be used if you have decided to declare your own
     * user context id.
     * Otherwise, the user's underlying session is always deleted upon exiting
     * the application.
     *
     * Note that if you decide to use this method, it should be done on the
     * final step of the flow of work that the user follows. Upon ending
     * a work session, all data and work that was associated with this session
     * is permanently lost.
     *
     * @public
     */
    removeUserSession(): Promise<void>;
    /**
     * Times out a user session stopping communication and releasing the license but does not delete the session itself.
     * This allows for keeping the user's work in the case a user context id is declared
     * making it possible to continue working on it after a session refresh.
     *
     * @public
     */
    timeoutUserSession(): Promise<void>;
    /**
     * Sets the default configuration that will be used when executing Ocr operations.
     *
     * This is overridden if a more specific configuration is provided
     * when generating Ocr data for a specific page (see {@link IPage.generateOcrData}).
     *
     * If no default configuration is set and no specific configuration is
     * given when requesting Ocr data generation, then the HTML Service defaults will
     * be used.
     *
     * @public
     */
    setDefaultOcrConfiguration(ocrConfiguration: IOCRConfiguration): void;
    /**
     * Registers a handler that will be triggered every time the connection with a scan service changes.
     *
     * This allows for automatically running Start Scan logic only <b>after</b> a connection has been properly
     * established as well as other similar automations.
     *
     * @param handler - the callback that will be run every time a connection with a scan service changes
     *
     * @public
     */
    addScanServiceConnectionHandler(handler: (connected: boolean, serviceType: ScanService) => void): void;
    /**
     * Provides a list of the scanners available to the running workstation. Note that
     * an available scanner might be disconnected and not available for use. The name
     * of the scanner matches the name that is shown to Scanner related dialogs.
     * Default: IScanService.Opentext_CCT
     *
     * @public
     */
    getScanners(serviceType?: ScanService): Promise<IScanner[]>;
    /**
     * Add to the window object (as global variables) some useful types to be used with various methods, object and
     * functions of the application.
     * This types already exist under the `ith` object provided. This is a convenience method in order to make those
     * objects even easier to access. They are not made available to the global scope by default in order to avoid
     * possible name conflicts with a hosting application.
     *
     * @param prefix - string prefix that will be added to all installed types in order to avoid any conflicts with
     * similarly named types. For example, using ith.installGlobalTypes('app_'); you can then access the BarcodeType
     * object using `app_BarcodeType`.
     *
     * @public
     */
    installGlobalTypes(prefix?: any): void;
    /**
     * This method returns the IETF BCP 47 tag of the language
     * that is currently being used.
     *
     * @return IETF BCP 47 tag of the currently selected language
     *
     * @public
     */
    getCurrentLanguageTag(): string;
    /**
     * Highlights the specified rectangle in the active image viewer. The highlights produced are ephemeral i.e. if the
     * user switches to another page they disappear.
     *
     * @param left
     * @param top
     * @param width
     * @param height
     *  The rectangle that defines the zone to be highlighted. if options.absolute is undefined or false these should be in
     *  normalized coordinates. Otherwise they should be absolute coordinates in units suitable for the page on which the
     *  highlight is to be applied (i.e. could be pixels or even inches)
     * @param options (optional)
     *  Various options for the operations
     *    absolute: (optional) boolean if true the rectangle is specified in absolute coordinates
     *    keepOrientation: (optional) boolean, default = true. If true the rectangle will be drawn in the orientation of the page (e.g., if it is rotated). Otherwise it will be drawn with a 0 angle orientation
     *    scrollToZone: (optional) default = false. If true the active image viewer will also try to scroll to the center of the supplied zone.
     *    color: (optional) a valid CSS color string. This is the color that will fill the zone rectangle so it is wise to have some transparency. default = Main color of theme with 50% transparency
     *    outlineColor: (optional) CSS color value for the outline of the zone rect. default = Main color of theme opaque
     *
     *  @return
     *    A handle for the highlight that can be used to dismiss it by passing it to removeHighlight
     *
     *  @public
     */
    highlightZone(left: number, top: number, width: number, height: number, pageIndex?: number, options?: HighlightZoneOptions): any;
    /**
     * Removes the highlight
     *
     * @param highlightHandle
     *  A highlight handle returned by a previous call to highlightZone
     *
     * @public
     */
    removeHighlight(highlightHandle: any): void;
    /**
     * Remove all highlights previously installed by highlightZone
     *
     * @public
     */
    clearHighlights(): void;
    /**
     * Activates a highlight
     *
     * @param highlightHandle
     *  A highlight handle returned by a previous call to highlightZone
     *
     * @public
     */
    activateHighlight(highlightHandle: any): void;
    /**
     * Scrolls the active viewer to display the given rectangle RELATIVE coordinates
     *
     * @param rect
     *  a set of relative coordinates, that represents a rectangle
     *
     * @public
     */
    imageViewerScrollTo(rect: {
        x: number;
        y: number;
        width: number;
        height: number;
    }): void;
    /**
     * Returns true if search mode is active, false otherwise.
     *
     * @public
     */
    isSearchModeActive(): boolean;
}

/**
 * @public
 */
export declare namespace ith {
    /**
     * Initializes, loads and configures the application. It requires an HTMLElement object that will be the container
     * of the ITH application in the DOM.
     *
     * @param el - the DOM element that the application will be appended
     * @param config - an optional `IthConfig` object for customizing the configuration of the application
     *
     * @public
     */
    export function createInstance(el: HTMLElement, config?: IthConfig): Promise<ITCDispatch>;
    /**
     * Callback function that is called *after* the instance is created and *after* the user's instance creation promise resolution callback
     * has run. This is needed for initialization logic that depends on the user's configurations and customizations to run properly (e.g. JobEvents).
     *
     * @public
     */
    export function instanceCreated(dispatch: ITCDispatch): void;
    /**
     * Deinitializes, deconstructs and removes the application from the DOM.
     *
     * @public
     */
    export function unload(): Promise<void>;
}

/**
 * The configuration of TC HTML.
 *
 * @public
 * @beta
 */
export declare interface IthConfig {
    /**
     * The URL of the ITH server. Default: 'http://localhost:8199/html-service/rest/v1.0/'
     *
     * @public
     * @beta
     */
    srvBaseUrl?: string;
    /**
     * The URL of the static files. Default: 'http://localhost:8199/client-html/static/'
     *
     * @public
     * @beta
     */
    srvStaticFilesBaseUrl?: string;
    /**
     * The URL of the application javascript files. Default: 'http://localhost:8199/client-html/'
     * This setting must be set in cases where the application is unable to determine it automatically.
     *
     * @public
     * @beta
     */
    javascriptFilesBaseUrl?: string;
    /**
     * Whether ITH will use the CCT or not.
     * If true, ITH will attempt to connect to CCT on startup and will also provide
     * and indicator to the user about the connection status.
     * If false, then no indication whatsoever is given to the user. ITH works totally
     * independently
     *
     * @public
     * @beta
     */
    UseCCT?: boolean;
    /**
     * Whether ITH will use the RangerManager or not.
     * If true, ITH will attempt to connect to RangerManager on startup and will also provide
     * and indicator to the user about the connection status.
     * If false, then no indication whatsoever is given to the user. ITH works totally
     * independently
     *
     * @public
     * @beta
     */
    UseCheckScanning?: boolean;
    /**
     * The WebSocket URL for SilverBullet Ranger Remote service.
     *
     * @public
     * @beta
     */
    CheckUrl?: string;
    /**
     * Whether the CCT server should be detected and running during initialization.
     * If true, then ITH will block until CCT becomes available.
     * If CCT becomes unavailable at a later point (e.g. after startup), ITH will continue
     * to work. This flag only sets the initial state.
     * default: false
     *
     * @public
     * @beta
     */
    RequireCCTOnStartup?: boolean;
    /**
     * Number on milliseconds that are allowed to detect whether CCT service is running or not
     * before displaying a blocking window on top of ITH that prompts the user to download it.
     * This parameter only makes sense if RequireCCTOnStartup is true.
     * default: 3000
     *
     * @public
     * @beta
     */
    InitialCCTDetectDelayMs?: number;
    /**
     * Whether to prompt the user to download and install CCT if not found during
     * initialization.
     * If RequireCCTOnStartup is true, the user will get offered a download link of CCT
     * on the CCT required prompt.
     * If RequireCCTOnStartup is false and PromptForCCTDownload is true then
     * a notification is being displayed to the user with the download link of CCT.
     * default: false
     * If RequireCCTOnStartup is true but PromptForCCTDownload is false then
     * the application will block if it doesn't detect CCT but it will not offer a
     * link to download it. Use this configuration if you require CCT but want to
     * control when and how the users install CCT in their local machines or when
     * users do not have installation permissions.
     *
     * @public
     * @beta
     */
    PromptForCCTDownload?: boolean;
    /**
     * This is the OpenText/Captiva cloud toolkit runtime re-distributable.
     * This is relative to ITH root.
     *
     * @public
     * @beta
     */
    CCTUrl?: string;
    /**
     * Whether to reuse an established CCT session or not.
     *
     * If true, then on initialization the application will attempt to reuse an existing CCT session.
     * This allows for avoiding reloading a scanner and its settings cutting down the time required
     * for a first scan. This also means that a CCT session will be kept alive for 5 minutes even after
     * the application has unloaded, thus locking the scanner and preventing use from non CCT applications.
     *
     * If false, then on initialization the application creates a new CCT session destroying any existing
     * ones. It also ends the CCT session upon unloading, releasing the scanner as well. In case a CCT
     * session is not properly unloaded, it will be terminated by CCT itself after 1 minute of non-use.
     *
     * Default: true
     *
     * @public
     * @beta
     */
    ReuseCCTSession?: boolean;
    /**
     * Whether to disable automatic handling of out-of-paper when scanning. Default
     * value is true. Set it to false to have the scanner stop when it goes out of paper.
     *
     * @public
     * @beta
     */
    DisableOOPHandling?: boolean;
    /**
     * Whether to disable the automatic detection of ADF (Automatic Document Feeder)
     * for the reason of determining whether the out-of-paper handling should be disabled.
     * The out-of-paper handling fails to perform properly with scanners that have both a
     * flatbed and ADF. In order to disable the OOP handling for those scanners we need to
     * detect whether the ADF is really used or not; yet some scanners may fail to report that
     * properly. If this happens, the OOP is permanently disabled, something that is not desirable
     * in most cases. Setting this to true allows the OOP handling to operate as expected.
     *
     * @public
     * @beta
     */
    DisableADFDetectionForOOP?: boolean;
    /**
     * If the scanner has both ADF and Flatbed, this option will trigger attempting to scan from
     * the Flatbed if the ADF is out of paper on scan start.
     *
     * @public
     * @beta
     */
    ScanFromFlatbedIfADFIsOOP?: boolean;
    /**
     * This is the maximum number of concurrent RPC requests allowed,
     * e.g. invocations of dispatch.invokeOnServer().
     *
     * @public
     * @beta
     */
    MaxConcurrentServerOps?: number;
    /**
     * Whether client logging is directed to server or not.
     *
     * @public
     * @beta
     */
    LogToServer?: boolean;
    /**
     * This is a string that is sent to the server when remote logging is enabled. It is used
     * in the server's log4j setup to distinguish logging arriving from clients. If you leave this
     * empty it defaults to the client internal IP address.
     * In production environment it may make sense to set this to a user-id or another context value
     * that may help in identifying the browser/user/session that is sending the logging information.
     *
     * @public
     * @beta
     */
    LogToServerContextID?: string;
    /**
     * Theme Configuration.
     *
     * The application is using LESS (http://lesscss.org/) to generate the final CSS that styles the app.
     * This configuration allows to override some LESS variables which will result in changing
     * the colors and look and feel.
     *
     * Two variables are available for customization, the *base* and the *accent* which are
     * color definitions for the theme.
     *
     * *base*: color definition is the most basic color that is being used in almost all
     * elements that have color.
     *
     * *accent*: used to give emphasis to areas/elements that require attention.
     *
     * The value of this configuration property must be a plain javascript object that includes properties
     * of key-value pair of each definition to customize. For example, to change the base color to green and
     * the accent to yellow configure it as follows:
     *
     * ThemeConfiguration: \{ base: "#007700", accent: "#ffff00" \}
     *
     * @public
     * @beta
     */
    ThemeConfiguration?: ICustomThemeConfig;
    /**
     * URL of an image to be used as a custom logo. It can be relative or absolute and the formats supported are PNG and SVG.
     *
     * @public
     * @beta
     */
    CustomLogo?: string;
    /**
     * Responsible for toggling the Search toolbar icon and functionality.
     *
     * @public
     * @beta
     */
    SupportsSearch?: boolean;
    /**
     * Cache size in MB for images/rendition in HTML Client memory; default is 100.
     *
     * @public
     * @beta
     */
    RendCacheSizeMB?: number;
    /**
     * Use this if stack traces should be shown in error dialogs.
     *
     * Defaults to true.
     *
     * @public
     * @beta
     */
    ShowStackTraces?: boolean;
    /**
     * Cache size in MB for images in HTML Client memory while scanning;
     * used only for 8-bit images. Set to zero (0) to disable cache.
     *
     * @public
     * @beta
     */
    CCTCacheSizeMB?: number;
    
    /**
     * Default values for image operation actions.
     *
     * These values will be applied as defaults in the GUI controls, as well as in cases where
     * operations must be applied automatically (view AutoRasterizeWhenNeeded config).
     *
     * Defaults are:
     * <ul>
     *   <li>Rasterization.dpi = 300</li>
     *   <li>Rasterization.maxEdgeSize = 0</li>
     *   <li>Rasterization.binaryDithering = true</li>
     *   <li>Rasterization.colorMode = COLOR</li>
     *   <li>Rasterization.pageSize = COLOR</li>
     *   <li>Rasterization.pageOrientation = COLOR</li>
     *   <li>Brightness = 0</li>
     *   <li>Contrast = 0</li>
     * </ul>
     *
     * @public
     * @beta
     */
    DefaultImageOperationValues?: {
        Rasterization?: {
            dpi: 72 | 96 | 100 | 150 | 200 | 250 | 300 | 400 | 600;
            maxEdgeSize: number;
            binaryDithering: boolean;
            colorMode: "COLOR" | "GRAY" | "BINARY";
            pageSize: "LETTER" | "LEGAL" | "A4" | "LEDGER";
            pageOrientation: "PORTRAIT" | "LANDSCAPE";
        };
        Brightness?: number;
        Contrast?: number;
        HoleFill?: FillPunchHolesOptions;
    };
}

/**
 * @internal
 */
export declare namespace IthConfig {
    
    
    
}

/**
 * @public
 */
export declare interface IthConfigTC extends IthConfig {
    /**
     * Descriptor for the Job that will be used by default, except if overridden by the Dispatch#setJob method.
     * View the {@link JobSchema} type for documentation on the object properties.
     *
     * @public
     */
    DefaultJob: JobSchema;
    /**
     * Configuration object for any custom licensing needs. Requires an `id` property that is a string that will match the custom
     * licensing helper provided in the server. Can optionally take a `data` property and can be anything that the licensing
     * helper will require. Note that `data` must be serializable.
     *
     * @public
     */
    LicensingConfig: {
        id: string;
        data?: any;
    };
    /**
     * The application needs to register with a license server to work properly. If not, it will work in Unlicensed Mode,
     * which means that a watermark will be added to every image that goes through it.
     * The following parameters may need to be set depending on your use case and the license you have been provided with:
     *
     *  - licenseUser: if the license is based on "named users", then this is the named user that is using the application.
     *  - licenseDept: the business department. This parameter may be required, depending on the license.
     *  - licenseRequired: during development and evaluation this can be set to false in order to allow for the application
     *  to work with no license present. However once in production it is recommended to set this to true to avoid having
     *  users mistakenly produce work that is watermarked. It is possible that the application enters Unlicensed mode while
     *  the user misses this. By enforcing a license to be present, the application will block and no erroneous work may
     *  be executed.
     *
     *  @public
     */
    UserLicensingInfo: {
        licenseUser?: string;
        licenseDept?: string;
        licenseRequired?: boolean;
    };
    /**
     * Responsible for toggling the annotation related options in the application.
     * If true, will show detected annotations on each page in the single page view and
     * all annotation related menus and options will be available.
     * If false, all of the above will be hidden and disabled. This will also hide the
     * annotation layer in the page view effectively hiding existing page annotations.
     *
     * @public
     */
    SupportsAnnotations: boolean;
    /**
     * Responsible for toggling the support of rubberband ocr functionality.
     * If true, the rubberband ocr activation button will be available in the
     * single page view registering handlers will be allowed.
     *
     * @public
     */
    SupportsRubberbandOcr: boolean;
    /**
     * Optional user related information. If the client is running in a user based environment
     * it is possible to provide some identification information for the current user.
     *
     * @public
     */
    UserInfo: {
        /**
         * Sets a custom user context id for the client application.
         *
         * Set this property if you want to distinguish each user that accesses to the application
         * from a single machine. The provided identifier must be unique for each user and consistent
         * in order to properly utilize this functionality. It is suggested to use an identifier
         * provided by parent system you are integrating with (for example a Document Management system).
         *
         * By providing a specific user context id, the application is enabled to allow for
         * the user's working context to be persisted across application refresh and page
         * restores. The user however is not allowed to open multiple instances of the client
         * (neither in the same nor in different browser tabs/windows). If a new client instance
         * is opened, the old instance will become unavailable for further use, except if the user
         * refreshes the page containing the unavailable instance (which will now make the new instance
         * unavailable).
         * Note that the custom user context id functionality does not work across different browsers.
         *
         * If you decide to use this functionality you must also manually end the user's session
         * when he initiates a Logout type of action. Please view the {@link Dispatch#removeUserSession} method.
         *
         * It is recommended that the user avoids concurrently opening more than one instance of the application
         * if this functionality is enabled.
         *
         * @public
         */
        ContextId: string;
        /**
         * Sets the current user's name.
         *
         * @public
         */
        Name: string;
    };
    /**
     * Use this if you want to enforce user confirmation on what files are about to be imported.
     *
     * If this is false or not set, then once a user selects a file to import on the scan dialog,
     * it will automatically confirm and upload it to the application.
     *
     * If this is set to true, then the selected file will not be imported until the user confirms
     * the action.
     *
     * @public
     */
    AlwaysConfirmImport: boolean;
    /**
     * Will perform automatic rasterization of imported vector images when needed.
     *
     * For example, if an image operation such as brightness adjustment must be performed
     * on a vector image, it must be rasterized first.
     *
     * By default, such operations are not available for vector images. Triggering this
     * option makes them available. If they are used, the vector image will be rasterized first.
     * Note that rasterization of a vector image will result in a dramatic relative increase
     * in size.
     *
     * The rasterization options that will be used in this case are the ones defined under
     * DefaultImageOperationValues.Rasterization
     *
     * Defaults to false.
     *
     * @public
     */
    AutoRasterizeWhenNeeded: boolean;
    
}

/**
 * @internal
 */
export declare namespace IthConfigTC {
    
    
}

/**
 * Timestamp Token Information
 *
 * @public
 * @beta
 */
declare interface ITST {
    /**
     * Timestamp signing authority
     *
     * @public
     * @beta
     */
    authority: string;
    /**
     * Timestamp (UTC)
     *
     * @public
     * @beta
     */
    date: Date;
    /**
     * Timestamp validity
     *
     * @public
     * @beta
     */
    valid: boolean;
    /**
     * Timestamp validity error description
     *
     * @public
     * @beta
     */
    errorMsg: string;
}

/**
 * @public
 */
export declare interface IViewer {
    /**
     * UUID of viewer
     *
     * Used to identify the viewer (i.e. for when multiple viewers are open)
     *
     * @public
     */
    readonly uuid: string;
    /**
     * The IPage currently displayed by the viewer. In case where none is displayed, it will be undefined
     *
     * @public
     */
    readonly page: IPage;
    /**
     * The current width of the viewport of the viewer in number of pixels
     *
     * @public
     */
    readonly widthPx: number;
    /**
     * The current height of the viewport of the viewer in number of pixels
     *
     * @public
     */
    readonly heightPx: number;
    /**
     * The current zoom percentage of the viewer. The number is a percentage value
     * e.g. 10 = 10%, 250 = 250% etc.
     *
     * @public
     */
    readonly zoomPrcnt: number;
}

/**
 * @public
 */
export declare interface IViewerListener {
    /**
     *
     * The page displayed has changed in the viewer
     *
     * @param {IPage} currentPage - The currently displayed page (the new page which the viewer is now displaying)
     * @param {IPage} previousPage - The previous page displayed. If there was no previous page, it will be undefined.
     * @param {IViewer} imageViewer - The IViewer that had its page changed
     *
     * @public
     */
    pageChanged?(viewer: IViewer, currentPage: IPage, previousPage: IPage): void;
    /**
     *
     * The page displayed in the viewer has been updated. e.g., an action has been applied to it for instance rotate,
     * deskew etc.
     *
     * @param {IPage} page - The currently displayed page (the new page which the viewer is now displaying)
     * @param {ActionType} action - The action type performed which caused the page to update
     * @param {IViewer} imageViewer - The IViewer that had its page changed
     *
     * @public
     */
    pageUpdated?(viewer: IViewer, page: IPage, action: ActionType): void;
    /**
     * A Viewer has been activated. This event is useful when multiple viewers are open because only one is active
     * at any given time.
     *
     * @param {IViewer} currentviewer - the IViewer that is now active, and all the rest are inactive.
     * @param {IViewer} currentviewer - the previously active IViewer. If there was none, then it will be undefined.
     *
     * @public
     */
    activeViewerChanged?(currentViewer: IViewer, previousViewer: IViewer): void;
    /**
     * A Viewer has been hidden or got visible.
     *
     * @param viewer - The related IViewer
     * @param visible - value will be true if it got visible or false if it got hidden
     *
     * @public
     */
    viewerVisibilityChanged?(viewer: IViewer, visible: boolean): void;
    /**
     * A new Viewer has been created.
     *
     * @param viewer - The new IViewer that has been created
     *
     * @public
     */
    viewerCreated?(viewer: IViewer): void;
    /**
     * A Viewer has been destroyed.
     *
     * @param viewer - The IViewer that has been destroyed
     *
     * @public
     */
    viewerDestroyed?(viewer: IViewer): void;
    /**
     * A Viewer has changed its zoom ratio.
     *
     * @param {IViewer} viewer - The related IViewer
     * @param {number} currentZoomratio - The current (new) zoom ratio
     * @param {number} previousZoomratio - The previous zoom ratio, if any otherwise it will be undefined
     *
     * @public
     */
    viewerZoomratioChanged?(viewer: IViewer, currentZoomratio: number, previousZoomratio: number): void;
    /**
     * A Viewer has changed its size in pixels
     *
     * @param {IViewer} viewer - The related IViewer
     * @param currentPagesize - The current (new) page size (properties width and height) in pixels.
     * @param previousPagesize - The previous page size in pixels, if there were none the width and height properties will be undefined.
     *
     * @public
     */
    viewerSizeChanged?(viewer: IViewer, currentPagesize: {
        width: number;
        height: number;
    }, previousPagesize: {
        width: number;
        height: number;
    }): void;
    /**
     * A Viewer has changed its scrolling position
     *
     * @param {IViewer} viewer - The related IViewer
     * @param currentScrolling - The current (new) scrolling position (properties left and top) in pixels.
     * @param previousScrolling - The previous scrolling position in pixels, if there were none the left and top properties will be undefined.
     *
     * @public
     */
    viewerScrollingChanged?(viewer: IViewer, currentScrolling: {
        left: number;
        top: number;
    }, previousScrolling: {
        left: number;
        top: number;
    }): void;
}

/**
 * The JobSchema represents the json model that must be used when creating a Job object
 * from which batches are constructed. The {@link ITCDispatch.setJob} method expects a
 * json object that conforms to this schema.
 *
 * See {@link RecognitionProfileSchema}, {@link RecognitionProfileGroupSchema},
 * {@link RecognitionProfileBarcodeSchema},
 * {@link SeparationSchema}, {@link SeparationByBarCodeSchema},
 * {@link SeparationByBlankPageSchema}, {@link SeparationEveryXSchema}.
 *
 * @remarks
 * Here is a an object that uses almost all features of the schema:
 * ```js
 * //define a recognition profile group to be reused in the job object below
 * var rpGroup = {
 *   engine: RecognitionEngine.GROUP,
 *   profiles: [
 *     {
 *       engine: RecognitionEngine.DEFAULT_BARCODE_READER,
 *       parameters: {
 *          orientations: [BarcodeOrientation.LeftToRight, BarcodeOrientation.TopToBottom],
 *          rectangle: [.188, .243, .568, .094318]
 *        },
 *       codeTypes: [BarcodeType.Code_128, BarcodeType.Code_39],
 *       detectOnPageSide: IPage.Side.BACK
 *     },
 *     {
 *       engine: RecognitionEngine.DEFAULT_BARCODE_READER_LINUX,
 *       parameters: {
 *         orientations: [BarcodeOrientation.All],
 *       },
 *       codeTypes: [BarcodeType.Code_128, BarcodeType.Code_39],
 *       detectOnPageSide: IPage.Side.FRONT
 *     }
 *   ]
 * };
 *
 * //create a job object to be used in setJob().
 * var job = {
 *      name: "Default Job",
 *      description: "Job Description",
 *      useStackLevel: false,
 *      useFolderLevel: true,
 *      allowAnnotations: true,
 *      supportEDocs: true,
 *      enableIndexing: true,
 *      pdfsAsImages: false,
 *      batchNaming: 'BATCH $CurrentDate',
 *      ocrOnScan: false,
 *      decryptionAllowed: true,
 *      allowedImageModes: [ImageColorMode.COLOR, ImageColorMode.GRAY, ImageColorMode.BINARY],
 *      allowedResolutions: [200, 300],
 *      allowsPageSideMode: [PageSideMode.SINGLE_SIDE],
 *      recognitionProfile: rpGroup,
 *      separations: [{
 *          type: SeparationType.BLANK_PAGE,
 *          separationAction: SeparationAction.NEW_DOCUMENT,
 *          deletePage: true,
 *          perc: 0.03,
 *          eventCount: 2,
 *        },
 *        {
 *          type: SeparationType.BARCODE,
 *          separationAction: SeparationAction.NEW_DOCUMENT,
 *          recognitionProfile: rpGroup,
 *          deletePage: true,
 *          eventCount: 3,
 *          regex: ".*",
 *        },
 *        {
 *          type: SeparationType.EVERY_X,
 *          separationAction: SeparationAction.NEW_DOCUMENT,
 *          deletePage: true,
 *          countList: [1,2,3,4],
 *          countImages: true
 *        }
 *      ]
 *    };
 * ```
 * @public
 */
export declare interface JobSchema {
    /**
     * Job name.
     * Mandatory
     * @public
     */
    name: string;
    /**
     * Job description.
     * Optional
     * @public
     */
    description?: string;
    /**
     * If the job will create batches with stacks. If true, then folders are also required. Defaults to false.
     */
    useStackLevel?: boolean;
    /**
     * If the job will create batches with folders or documents only. Defaults to true.
     * Optional
     * @public
     */
    useFolderLevel?: boolean;
    /**
     * If the job will allow adding annotations on to batch pages. Defaults to true.
     * Optional
     * @public
     */
    allowAnnotations?: boolean;
    /**
     * If the created batch will support eDocs. Defaults to true.
     * Optional
     * @public
     */
    supportEDocs?: boolean;
    /**
     * If the created batch will import PDF files as images or as eDocs.
     * Defaults to true (images).
     * Optional
     * @public
     */
    pdfsAsImages?: boolean;
    /**
     * The template that will be used for created batch names.
     * Can be a combination of string and internal variables that are prefixed by the '$' character.
     * Available variables are: `$CurrentDate`, `$CurrentTime`, `$GUID` (a generated uuid),
     * `$UTCOffset`, `$DSTOffset`, `$UTCDSTOffset`.
     * Defaults to `$CurrentDate $CurrentTime`.
     * Optional
     * @public
     */
    batchNaming?: string;
    /**
     * Whether OCR will be automatically triggered the moment a file is scanned into the system. Defaults to false.
     * Optional
     * @public
     */
    ocrOnScan?: boolean;
    /**
     * Flag that indicates if the decryption of encrypted files is allowed;
     * if yes the user is prompted to provide the password during file import.
     * Defaults to false.
     * Optional
     * @public
     */
    decryptionAllowed?: boolean;
    /**
     * Array of image color modes that are allowed when scanning.
     * Defaults to all image modes.
     * Optional
     * @public
     */
    allowedImageModes?: ImageColorMode[];
    /**
     * Array of resolutions that are allowed when scanning.
     * An empty array means that the user will only be allowed to scan according to the scan profile scanner setting.
     * Defaults to empty array.
     * Optional
     * @public
     */
    allowedResolutions?: number[];
    /**
     * If specified, only the selected page side mode will be available (Single or Duplex). If undefined then both
     * will be available.
     * Defaults to undefined
     * Optional
     * @public
     */
    allowedPageSideMode?: PageSideMode;
    /**
     * The recognition profile that will be used to decide what type of detection will take place during scan/import.
     * @public
     */
    recognitionProfile?: RecognitionProfileBarcodeSchema | RecognitionProfileGroupSchema;
    /**
     * Configurations regarding the handling of imported files.
     * Default used values are the following:
     *   `createDocumentsForMultiDocs: true`
     *   `createDocumentsForEDocs: true`
     *   `createDocumentsForEachFile: false`
     * Optional
     * @public
     */
    fileImportOptions?: {
        /**
         * Creates a separate Document for each multi-page file uploaded.
         * Optional
         * @public
         */
        createDocumentsForMultiDocs: boolean;
        /**
         * Creates a new Document when an eDoc file is imported.
         * Optional
         * @public
         */
        createDocumentsForEDocs: boolean;
        /**
         * Creates a new Document for each file that is imported.
         * Optional
         * @public
         */
        createDocumentsForEachFile: boolean;
    };
    /**
     * Configurations regarding the handling of imported email file types (.msg, .eml etc).
     * Default used values are the following:
     *  ```
     *   importOriginalEmail: false
     *   importTextVersion: false
     *   importRtfVersion: false
     *   importHtmlVersion: true
     *   importAttachments: true
     *   createDocuments: true
     *   createFolder: false
     *   createFoldersForEmbeddedEmails: false
     *   createDocumentForEmail: false
     *   createDocumentForEmbeddedEmail: false
     *   ```
     * Optional
     * @public
     */
    emailImportOptions?: {
        /**
         * If true, the original msg file will be imported.
         * @public
         */
        importOriginalEmail?: boolean;
        /**
         * If true, a text version of the email will be imported.
         * @public
         */
        importTextVersion?: boolean;
        /**
         * If true, an rtf version of the email will be imported.
         * @public
         */
        importRtfVersion?: boolean;
        /**
         * If true, an html version of the email will be imported.
         * @public
         */
        importHtmlVersion?: boolean;
        /**
         * If true, any attachments that come with the email will be imported.
         * @public
         */
        importAttachments?: boolean;
        /**
         * If true, a new document for each attachment will be imported.
         * @public
         */
        createDocuments?: boolean;
        /**
         * If true, a new folder will be created for the email content.
         * @public
         */
        createFolder?: boolean;
        /**
         * If true, a new folder will be created for each embedded email content.
         * @public
         */
        createFoldersForEmbeddedEmails?: boolean;
        /**
         * If true, a new document will be created for the email text version.
         * @public
         */
        createDocumentForEmail?: boolean;
        /**
         * If true, a new document will be created for every embedded email text version.
         * @public
         */
        createDocumentForEmbeddedEmail?: boolean;
    };
    /**
     * Configurations regarding the handling of imported files that do not
     * specify rasterization information (information that defines how
     * raster views of their content should be generated).
     *
     * Such files are Office type files or email files.
     * Image files such as JPEG or TIF do not apply.
     * PDF files, although not always image based, specify such information
     * and thus do not apply either.
     * Optional
     * @public
     */
    rasterizationImportOptions?: {
        /**
         * Pagination information.
         * Defines the type of page the content should be paginated as.
         * @public
         */
        pageSize?: PageSize;
        /**
         * Pagination information.
         * Defines the page orientation the content should be paginated as.
         * @public
         */
        orientation?: PageOrientation;
    };
    /**
     * Configurations for automatic page separations.
     * Optional
     * @public
     */
    separations?: Array<SeparationEveryXSchema | SeparationByBlankPageSchema | SeparationByBarCodeSchema>;
    batchClass?: BatchClassSchema;
    stackClasses?: Array<StackClassSchema>;
    folderClasses?: Array<FolderClassSchema>;
    documentClasses?: Array<DocumentClassSchema>;
}

/**
 * @public
 * @beta
 * @beta
 */
export declare enum LevelName {
    /**
     * @public
     * @beta
     */
    Job = 0,
    /**
     * @public
     * @beta
     */
    Batch = 1,
    /**
     * @public
     * @beta
     */
    Folder = 2,
    /**
     * @public
     * @beta
     */
    Document = 3,
    /**
     * @public
     * @beta
     */
    Page = 4,
    /**
     * @public
     * @beta
     */
    Stack = 5
}

export declare interface ListItemSchema {
    data: Array<string>;
}

/**
 * In order to set predefined regex patterns, a NamedSearchPattern configuration object must be provided for each one of them.
 *
 * @public
 */
declare interface NamedSearchPattern {
    /**
     * The name of the pattern.
     *
     * @public
     */
    name: string;
    /**
     * The regex pattern itself.
     *
     * @public
     */
    pattern: string;
    /**
     * The regex flags applied to it.
     *
     * @public
     */
    flags: string;
}

/**
 * Available Nuance engine types.
 *  - The DEFAULT engine has good balance between accuracy and speed.
 *  - The ACCURATE engine has very good accuracy with a speed trade-off.
 *
 * @remarks alias NuanceOcrConfig.NuanceEngine
 *
 * @public
 * @beta
 */
export declare enum NuanceEngine {
    /**
     * @public
     * @beta
     */
    DEFAULT = "DEFAULT",
    /**
     * @public
     * @beta
     */
    ACCURATE = "ACCURATE"
}

/**
 * Enumeration of available language options for the Nuance engine.
 *
 * @remarks alias NuanceOcrConfig.NuanceLanguage
 *
 * @public
 * @beta
 */
export declare enum NuanceLanguage {
    LANG_ALL = "LANG_ALL",
    LANG_ALL_LATIN = "LANG_ALL_LATIN",
    LANG_ALL_ASIAN = "LANG_ALL_ASIAN",
    LANG_ENG = "LANG_ENG",
    LANG_GER = "LANG_GER",
    LANG_FRE = "LANG_FRE",
    LANG_DUT = "LANG_DUT",
    LANG_NOR = "LANG_NOR",
    LANG_SWE = "LANG_SWE",
    LANG_FIN = "LANG_FIN",
    LANG_DAN = "LANG_DAN",
    LANG_ICE = "LANG_ICE",
    LANG_POR = "LANG_POR",
    LANG_SPA = "LANG_SPA",
    LANG_CAT = "LANG_CAT",
    LANG_GAL = "LANG_GAL",
    LANG_ITA = "LANG_ITA",
    LANG_MAL = "LANG_MAL",
    LANG_GRE = "LANG_GRE",
    LANG_POL = "LANG_POL",
    LANG_CZH = "LANG_CZH",
    LANG_SLK = "LANG_SLK",
    LANG_HUN = "LANG_HUN",
    LANG_SLN = "LANG_SLN",
    LANG_CRO = "LANG_CRO",
    LANG_ROM = "LANG_ROM",
    LANG_ALB = "LANG_ALB",
    LANG_TUR = "LANG_TUR",
    LANG_EST = "LANG_EST",
    LANG_LAT = "LANG_LAT",
    LANG_LIT = "LANG_LIT",
    LANG_ESP = "LANG_ESP",
    LANG_SRL = "LANG_SRL",
    LANG_SRB = "LANG_SRB",
    LANG_MAC = "LANG_MAC",
    LANG_MOL = "LANG_MOL",
    LANG_BUL = "LANG_BUL",
    LANG_BEL = "LANG_BEL",
    LANG_UKR = "LANG_UKR",
    LANG_RUS = "LANG_RUS",
    LANG_CHE = "LANG_CHE",
    LANG_KAB = "LANG_KAB",
    LANG_AFR = "LANG_AFR",
    LANG_AYM = "LANG_AYM",
    LANG_BAS = "LANG_BAS",
    LANG_BEM = "LANG_BEM",
    LANG_BLA = "LANG_BLA",
    LANG_BRE = "LANG_BRE",
    LANG_BRA = "LANG_BRA",
    LANG_BUG = "LANG_BUG",
    LANG_CHA = "LANG_CHA",
    LANG_CHU = "LANG_CHU",
    LANG_COR = "LANG_COR",
    LANG_CRW = "LANG_CRW",
    LANG_ESK = "LANG_ESK",
    LANG_FAR = "LANG_FAR",
    LANG_FIJ = "LANG_FIJ",
    LANG_FRI = "LANG_FRI",
    LANG_FRU = "LANG_FRU",
    LANG_GLI = "LANG_GLI",
    LANG_GLS = "LANG_GLS",
    LANG_GAN = "LANG_GAN",
    LANG_GUA = "LANG_GUA",
    LANG_HAN = "LANG_HAN",
    LANG_HAW = "LANG_HAW",
    LANG_IDO = "LANG_IDO",
    LANG_IND = "LANG_IND",
    LANG_INT = "LANG_INT",
    LANG_KAS = "LANG_KAS",
    LANG_KAW = "LANG_KAW",
    LANG_KIK = "LANG_KIK",
    LANG_KON = "LANG_KON",
    LANG_KPE = "LANG_KPE",
    LANG_KUR = "LANG_KUR",
    LANG_LTN = "LANG_LTN",
    LANG_LUB = "LANG_LUB",
    LANG_LUX = "LANG_LUX",
    LANG_MLG = "LANG_MLG",
    LANG_MLY = "LANG_MLY",
    LANG_MLN = "LANG_MLN",
    LANG_MAO = "LANG_MAO",
    LANG_MAY = "LANG_MAY",
    LANG_MIA = "LANG_MIA",
    LANG_MIN = "LANG_MIN",
    LANG_MOH = "LANG_MOH",
    LANG_NAH = "LANG_NAH",
    LANG_NYA = "LANG_NYA",
    LANG_OCC = "LANG_OCC",
    LANG_OJI = "LANG_OJI",
    LANG_PAP = "LANG_PAP",
    LANG_PID = "LANG_PID",
    LANG_PRO = "LANG_PRO",
    LANG_QUE = "LANG_QUE",
    LANG_RHA = "LANG_RHA",
    LANG_ROY = "LANG_ROY",
    LANG_RUA = "LANG_RUA",
    LANG_RUN = "LANG_RUN",
    LANG_SAM = "LANG_SAM",
    LANG_SAR = "LANG_SAR",
    LANG_SHO = "LANG_SHO",
    LANG_SIO = "LANG_SIO",
    LANG_SMI = "LANG_SMI",
    LANG_SML = "LANG_SML",
    LANG_SMN = "LANG_SMN",
    LANG_SMS = "LANG_SMS",
    LANG_SOM = "LANG_SOM",
    LANG_SOT = "LANG_SOT",
    LANG_SUN = "LANG_SUN",
    LANG_SWA = "LANG_SWA",
    LANG_SWZ = "LANG_SWZ",
    LANG_TAG = "LANG_TAG",
    LANG_TAH = "LANG_TAH",
    LANG_TIN = "LANG_TIN",
    LANG_TON = "LANG_TON",
    LANG_TUN = "LANG_TUN",
    LANG_VIS = "LANG_VIS",
    LANG_WEL = "LANG_WEL",
    LANG_WEN = "LANG_WEN",
    LANG_WOL = "LANG_WOL",
    LANG_XHO = "LANG_XHO",
    LANG_ZAP = "LANG_ZAP",
    LANG_ZUL = "LANG_ZUL",
    LANG_JPN = "LANG_JPN",
    LANG_CHS = "LANG_CHS",
    LANG_CHT = "LANG_CHT",
    LANG_KRN = "LANG_KRN",
    LANG_THA = "LANG_THA",
    LANG_ARA = "LANG_ARA",
    LANG_HEB = "LANG_HEB",
    LANG_VIE = "LANG_VIE"
}

/**
 * Ocr language selection mode: in case more than one languages are defined for OCR,
 * whether all of them will be used or the engine will try pick one of them by guessing
 * from the content
 *
 * @remarks alias NuanceOcrConfig.NuanceMode
 *
 * @public
 * @beta
 */
export declare enum NuanceMode {
    /**
     * @public
     * @beta
     */
    SINGLE_LANG_AUTO = "SINGLE_LANG_AUTO",
    /**
     * @public
     * @beta
     */
    MULTI_LANG = "MULTI_LANG"
}

/**
 * @public
 */
declare interface PageArrivedReturnValue {
    /**
     * @public
     */
    Separation?: ScriptResultConsts;
    /**
     * @public
     */
    Retention?: ScriptResultConsts;
}

declare enum PageOrientation {
    PORTRAIT = 0,
    LANDSCAPE = 1
}

/**
 * Enumerates the supported scanning Page modes
 *
 * @beta
 * @public
 *
 */
export declare enum PageSideMode {
    /**
     * Single side scanning
     * @beta
     * @public
     */
    SINGLE_SIDE = 0,
    /**
     * Double sided scanning
     * @beta
     * @public
     */
    DUPLEX = 1
}

/**
 * @internal
 */
export declare namespace PageSideMode {
}

/**
 * Enumerates the supported page sizes
 *
 * @beta
 * @public
 */
declare enum PageSize {
    LETTER = 0,
    LEGAL = 1,
    A4 = 2,
    LEDGER = 3
}

/**
 * @public
 */
declare interface PreScanReturnValue {
    /**
     * Optional list of file extensions or mime types.
     *
     * When importing from the file system and the native "Browse Files" dialog opens this array allows creating a
     * custom file extension filter for the file types that the user should be looking for.
     *
     * Example:
     * <pre>
     *   {
     *     FileBrowserVisibleTypes: ["pdf", "tif", "tiff", "jpeg", "jpg"]
     *   }
     * </pre>
     *
     * @public
     */
    FileBrowserVisibleTypes?: string[];
    AllowedExtensions?: string[];
    DetectBarcodeTypesWhileScanning?: BarcodeType[];
    BarcodeReaderSettings?: [{
        BarcodeTypes?: BarcodeType[];
        Orientation?: string[] | BarcodeOrientation[];
        ScanIntervalPixels: number;
        QuietZone: string;
        Rectangle: number[];
        ThresholdMode: BarcodeThresholdMode;
        ThresholdLevel: number;
    }];
    DetectBarcodesOnPageSides?: IPage.Side[];
}

/**
 * An enumeration of the supported recognition engines.
 *
 * @beta
 * @public
 */
export declare enum RecognitionEngine {
    /**
     * This is the default engine that reads barcodes. It runs on Windows environment only.
     *
     * @beta
     * @public
     */
    DEFAULT_BARCODE_READER = "DEFAULT_BARCODE_READER",
    
    /**
     * This is the default engine that reads barcodes. It runs on Linux environment only.
     *
     * @beta
     * @public
     */
    DEFAULT_BARCODE_READER_LINUX = "DEFAULT_BARCODE_READER_LINUX",
    /**
     * This is not a real engine; it is used to group other recognition profiles.
     *
     * @beta
     * @public
     */
    GROUP = "GROUP",
    /**
     * This is the Nuance OCR engine. It runs on both Linux & Windows (although we have different engine implementations for each OS)
     */
    OCR_NUANCE = "OCR_NUANCE",
    /**
     * This is the Microsoft Azure OCR engine. It runs on both Linux & Windows since it uses an RPC executor to access the public MS API
     */
    OCR_MICROSOFT = "OCR_MICROSOFT",
    /**
     * This is the Amazon Rekognition OCR engine. It runs on both Linux & Windows since it uses an RPC executor to access the public Amazon API
     */
    OCR_AMAZON = "OCR_AMAZON",
    /**
     * This the default engine that performs OMR.
     */
    DEFAULT_OMR = "DEFAULT_OMR"
}

/**
 * A recognition profile for performing OCR.
 */
/**
 * This is a sub-type of the {@link JobSchema}.
 *
 * Properties specific to barcode recognition profiles.
 * @public
 */
export declare interface RecognitionProfileBarcodeSchema extends RecognitionProfileSchema {
    /**
     * List of all Barcode or Patchcode types that will be detected.
     * Applies only if the recognition profile type is BARCODE or PATCHCODE.
     *
     * Defaults to empty
     * Optional
     * @public
     */
    codeTypes: BarcodeType[];
    /**
     * The page side on which detection must occur.
     * If both sides must be detected value should remain undefined.
     * Applies only if the recognition profile type is BARCODE or PATCHCODE.
     *
     * Defaults to undefined
     * Optional
     * @public
     */
    detectOnPageSide?: IPage.Side;
}

/**
 * This is a sub-type of the {@link JobSchema}.
 *
 * Properties specific to recognition profile groups.
 * @public
 */
export declare interface RecognitionProfileGroupSchema extends RecognitionProfileSchema {
    /**
     * List of all recognition profiles that are part of a group.
     * Applies only if the recognition profile type is GROUP.
     * Optional
     * @public
     */
    profiles: RecognitionProfileSchema[];
}

/**
 * This is a sub-type of the {@link JobSchema}.
 *
 * The RecognitionProfileSchema represents an abstraction for all supported types
 * of recognition operations.
 *
 * See {@link RecognitionProfileGroupSchema}, {@link RecognitionProfileBarcodeSchema}
 * @public
 */
export declare interface RecognitionProfileSchema {
    /**
     * The underlying engine that will be used for the recognition operation.
     * @public
     */
    engine: RecognitionEngine;
    /**
     * A parameter map for more fine grained configuration of each type of recognition profile.
     *
     * For the {@link RecognitionEngine.DEFAULT_BARCODE_READER} and
     * {@link RecognitionEngine.DEFAULT_BARCODE_READER_LINUX} engines the following parameters are supported:
     *
     * `orientations` -> array of `BarcodeOrientation`s, e.g.:
     * ```ts
     * {
     *   "orientations": [BarcodeOrientation.BottomToTop, BarcodeOrientation.LeftToRight]
     * }
     * ```
     *
     *
     * `rectangle` -> an array with 4 numbers denoting the rectangle in which the recognition engine
     * should attempt detection. The order of the 4 numbers are: `[left, top, width, height]`.
     * Notice that the values are percentages and range from `0 .. 1`, e.g.:
     * ```ts
     * {
     *   "rectangle": [0.8, 0.05, 0.1, 0.03]
     * }
     * ```
     * The `left` and `width` (1th and 3rd numbers) are percentages of the image width.
     * The `top` and `height` (2nd and 4th numbers) are percentages of the image height.
     *
     *
     *
     * For the {@link RecognitionEngine.DEFAULT_BARCODE_READER} engine the following extra parameters are supported:
     *
     * `ScanInterval` -> The scan step in pixels when attempting to detect a barcode.
     * ```ts
     * {
     *   "ScanInterval": [0..10]
     * }
     * ```
     *
     * `QuietZone` -> Represents the expected amount of absence of noise around the barcode rectangle.
     * Any of the following strings: `ExtraSmall`, `Small`, `Normal`, `Large`
     * ```ts
     * {
     *   "QuietZone": "ExtraSmall"
     * }
     * ```
     *
     * `ThresholdMode` -> The {@link BarcodeThresholdMode} used. Available options are `Automatic` and `Fixed`
     * If Fixed is provided then a ThersholdLevel must also be defined.
     * ```ts
     * {
     *   "ThresholdMode": BarcodeThresholdMode.Automatic
     * }
     * ```
     *
     * `ThresholdLevel` -> The threshold point if the ThesholdMode is Fixed
     * ```ts
     * {
     *   "ThresholdLevel": [0..255]
     * }
     * ```
     *
     *
     * For custom parameters supported by the {@link RecognitionEngine.DEFAULT_BARCODE_READER_LINUX}
     * please contact the support team.
     *
     * @public
     */
    parameters?: {
        [key: string]: string;
    };
}

/**
 * The configuration object that must be provided in order to customize the redaction
 * options.
 */
declare interface RedactionOptions {
    /**
     * List of predefined redaction reasons that the user can select from.
     */
    redactionReasons?: string[];
    /**
     * Check if the user will be allowed to add his own redaction reason as free text.
     */
    allowFreeText?: boolean;
    /**
     * Check whether the Redaction Reason window will be displayed immediately upon redaction application or not.
     */
    displayWindowImmediately?: boolean;
}

declare namespace RedactionOptions {
    const DEFAULT: RedactionOptions;
}

/**
 * The Scan Profile schema represents the model that must be used
 * when providing a Scan Profile to the application.
 *
 * @public
 */
export declare interface ScanProfileSchema {
    /**
     * Scan profile name.
     * Mandatory
     * @public
     */
    name: string;
    /**
     * A description for the profile.
     * Optional
     * @public
     */
    description?: string;
    /**
     * a value from the ScanSource enumeration.
     * Mandatory
     * @public
     */
    source: ScanSource;
    /**
     * Name of the scanner as string.
     * Mandatory if this represents a scanner based scan source.
     * @public
     */
    scanner?: string;
    /**
     * The base64 encoded string of the scanner configurations.
     * Mandatory if this represents a scanner based scan source.
     * @public
     */
    CustomData?: string;
}

/**
 * author: kpentaris
 * date: 22-Mar-19
 */
/**
 * Enumeration for the available types of Scan Services.
 *
 * @public
 */
export declare enum ScanService {
    /**
     * @public
     */
    Opentext_CCT = "Opentext_CCT",
    Silverbullet_RANGER = "Silverbullet_RANGER"
}

/**
 * Enumerates the supported types of scan operation.
 *
 * @beta
 * @public
 */
export declare enum ScanSource {
    /**
     * Source is a scanner
     *
     */
    SCANNER = "SCANNER",
    /**
     * Source is a local or network folder
     *
     * @public
     */
    FOLDER = "FOLDER",
    /**
     * Source is a scanner that supports Web ISIS
     *
     * @public
     */
    WEBCAPTURE = "WEBCAPTURE",
    /**
     * Source is a network attached scanner that supports driverless communication
     *
     * @public
     */
    NETWORKSCANNER = "NETWORKSCANNER",
    /**
     * Source is a mobile device (currently only iOS devices are supported)
     *
     */
    MOBILE = "MOBILE",
    /**
     * Source is a scanner controlled via the SANE daemon in Linux
     *
     */
    SANE = "SANE",
    /**
     * Source is the system's clipboard.
     *
     */
    SYSTEMCLIPBOARD = "SYSTEMCLIPBOARD",
    /**
     * Source is a check scanner operated by Ranger API
     *
     * @public
     */
    CHECK = "CHECK"
}

/**
 * Defines constants that can be used as return values in several javascript methods
 *
 * @remarks alias ScriptResult.ScriptResultConsts
 *
 * @beta
 * @public
 */
export declare enum ScriptResultConsts {
    /**
     *
     * @public
     * @beta
     */
    NoValue = -9007199254740991,
    /**
     * Move focus to the next Index Field
     *
     * It may be used as a return value of the fieldFocusGained Indexing javascript method. For example:
     *
     * <code>
     * function fieldFocusGained(field)\{<br>
     * &nbsp;&nbsp;&nbsp;&nbsp; return Const.MoveToNextField;<br>
     * \}
     * </code>
     *
     * @public
     * @beta
     *
     */
    MoveToNextField = -9007199254740990,
    /**
     * Move focus to the next Node
     *
     * It may be used as a return value of the fieldFocusGained/fieldFocusGained Indexing javascript methods. For example:
     *
     * <code>
     * function fieldFocusGained(field)\{<br>
     * &nbsp;&nbsp;&nbsp;&nbsp; return Const.MoveToNextNode;<br>
     * \}
     * </code>
     *
     * @public
     * @beta
     */
    MoveToNextNode = -9007199254740989,
    /**
     * Move focus to a specific Index Field specified by name.
     *
     * It may be used as a return value of the fieldFocusGained Indexing javascript method. For example:
     *
     * <code>
     * function fieldFocusGained(field)\{<br>
     * &nbsp;&nbsp;&nbsp;&nbsp; return \{ Const.MoveToField: "&lt FieldName &gt" \};<br>
     * \}
     * </code>
     *
     * @public
     * @beta
     */
    MoveToField = -9007199254740988,
    /**
     * Abort an operation
     *
     * It may be used as a return value of the Job javascript methods batchWillClose, preScan and pageScanned methods.
     *
     *
     * @public
     * @beta
     */
    AbortOp = -9007199254740987,
    /**
     * Execute all separation rules defined by the Job
     *
     * It may be used as a return value of the Job javascript method pageArrived. For example:
     *
     * <code>
     * function pageArrived(batch, page)\{<br>
     * &nbsp;&nbsp;&nbsp;&nbsp; return \{ Separation : Const.SepDefault \};<br>
     * \}
     * </code>
     *
     * @public
     * @beta
     */
    SepDefault = -9007199254740986,
    /**
     * Suppress execution of all separation rules defined by the Job
     *
     * It may be used as a return value of the Job javascript method pageArrived. For example:
     *
     * <code>
     * function pageArrived(batch, page)\{<br>
     * &nbsp;&nbsp;&nbsp;&nbsp; return \{ Separation : Const.SepNone \};<br>
     * \}
     * </code>
     *
     * @public
     * @beta
     */
    SepNone = -9007199254740985,
    /**
     * Create a new Document
     *
     * It may be used as a return value of the Job javascript method pageArrived. For example:
     *
     * <code>
     * function pageArrived(batch, page)\{<br>
     * &nbsp;&nbsp;&nbsp;&nbsp; return \{ Separation : Const.SepNewDoc \};<br>
     * \}
     * </code>
     *
     * @public
     * @beta
     */
    SepNewDoc = -9007199254740984,
    /**
     * Create a new Folder
     *
     * It may be used as a return value of the Job javascript method pageArrived. For example:
     *
     * <code>
     * function pageArrived(batch, page)\{<br>
     * &nbsp;&nbsp;&nbsp;&nbsp; return \{ Separation : Const.SepNewFolder\};<br>
     * \}
     * </code>
     *
     * @public
     * @beta
     */
    SepNewFolder = -9007199254740983,
    /**
     * Keep the scanned image
     *
     * It may be used as a return value of the Job javascript method pageArrived. For example:
     *
     * <code>
     * function pageArrived(batch, page)\{<br>
     * &nbsp;&nbsp;&nbsp;&nbsp; return \{ Retention : Const.KeepImage\};<br>
     * \}
     * </code>
     *
     * @public
     * @beta
     */
    KeepImage = -9007199254740982,
    /**
     * Delete the scanned image
     *
     * It may be used as a return value of the Job javascript method pageArrived. For example:
     *
     * <code>
     * function pageArrived(batch, page)\{<br>
     * &nbsp;&nbsp;&nbsp;&nbsp; return \{ Retention : Const.DeleteImage\};<br>
     * \}
     * </code>
     *
     * @public
     * @beta
     */
    DeleteImage = -9007199254740981,
    /**
     * Delete the scanned image and the back side (if scanning in duplex mode)
     *
     * It may be used as a return value of the Job javascript method pageArrived. For example:
     *
     * <code>
     * function pageArrived(batch, page)\{<br>
     * &nbsp;&nbsp;&nbsp;&nbsp; return \{ Retention : Const.DeletePage\};<br>
     * \}
     * </code>
     *
     * @public
     * @beta
     */
    DeletePage = -9007199254740980,
    /**
     * Used as the 3rd parameter in getBranchName(): this is the action the user
     * is performing that causes the Step's branching script to execute.
     *
     * @public
     * @beta
     */
    Closing = -9007199254740979,
    /**
     * Used as the 3rd parameter in getBranchName(): this is the action the user
     * is performing that causes the Step's branching script to execute.
     *
     * @public
     * @beta
     */
    MovingToIndex = -9007199254740978,
    
    
    }

/**
 *
 * @remarks alias ScriptResult
 *
 * @public
 * @beta
 */
export declare class ScriptResultProp {
    /**
     * @public
     * @beta
     */
    static ReturnValue: string;
    /**
     * @public
     * @beta
     */
    static SuppressWarnDlg: string;
    /**
     * @public
     * @beta
     */
    static DetectBarcodeTypesWhileScanning: string;
    /**
     * @public
     * @beta
     */
    static Separation: string;
    /**
     * @public
     * @beta
     */
    static Retention: string;
    /**
     * @public
     * @beta
     */
    static BarcodeReaderSettings: string;
    /**
     * @public
     * @beta
     */
    static SwitchToScanActivity: string;
    /**
     * @public
     * @beta
     */
    static BranchName: string;
    /**
     * @public
     * @beta
     */
    static AllowIncompleteIndexing: string;
    /**
     * @public
     * @beta
     */
    static AllowRejectedNode: string;
    static DetectBarcodesOnPageSides: string;
}

/**
 * Available types of search are simple, regex and predefined patterns (according to {@link NamedSearchPattern}.
 *
 * @public
 */
declare type SearchType = "simple" | "regex" | "predefined";

/**
 * @public
 */
export declare enum SeparationAction {
    /**
     * @public
     */
    NONE = "NONE",
    /**
     * @public
     */
    NEW_DOCUMENT = "NEW_DOCUMENT",
    /**
     * This separation will work only if the Job allows for the Batch to have a Folder level.
     * Otherwise a new document separation will occur.
     * @public
     */
    NEW_FOLDER = "NEW_FOLDER",
    
}

/**
 * This is a sub-type of the {@link JobSchema}.
 *
 * Properties specific to bar codes type separation.
 * @public
 */
export declare interface SeparationByBarCodeSchema extends SeparationSchema {
    /**
     * The recognition profile to use to read bar codes.
     * Mandatory
     * @public
     */
    recognitionProfile: RecognitionProfileBarcodeSchema | RecognitionProfileGroupSchema;
    /**
     * The number of barcode that need to be detected (in one or more pages) before the separation is triggered.
     * Options. Defaults to 1.
     * @public
     */
    eventCount?: number;
    /**
     * A regular expression to use to match the value of the barcode.
     * If set, then the value of the detected barcode need to match the given regular
     * expression in order for the separation event to be triggered.
     * Optional. Defaults to undefined
     * @public
     */
    regex?: string;
}

/**
 * This is a sub-type of the {@link JobSchema}.
 *
 * Properties specific to blank page separation.
 * @public
 */
export declare interface SeparationByBlankPageSchema extends SeparationSchema {
    /**
     * The number of barcode that need to be detected (in one or more pages) before the separation is triggered.
     * Options. Defaults to 1.
     * @public
     */
    eventCount?: number;
    /**
     * Number from 0-1 representing the percentage of the page that must NOT be
     * blank in order for it to be considered a blank page.
     * Optional. Default to 0.03
     * @public
     */
    perc?: number;
}

/**
 * This is a sub-type of the {@link JobSchema}.
 *
 * Propeties specific to page count based separation.
 * @public
 */
export declare interface SeparationEveryXSchema extends SeparationSchema {
    /**
     * Combination of number of pages that must be scanned before separation
     * occurs, e.g. [1,2] means every 1 then 2 then 1 again etc.
     * Mandatory
     * @public
     */
    countList: Array<number>;
    /**
     * Declare if the number is counted per page or per image (page front and page
     * back are considered separate images).
     * Optional. Defaults to false
     * @public
     */
    countImages?: boolean;
}

/**
 * This is a sub-type of the {@link JobSchema}.
 *
 * The SeparationSchema provides options concerning pages' separation.
 * The following types of separation are supported: by bar codes, by blank pages, by fixed number of pages.
 *
 * Depending on the type of separation, different properties need to be defined as
 * described below in {@link SeparationByBarCodeSchema},
 * {@link SeparationByBlankPageSchema} and {@link SeparationEveryXSchema}.
 * @public
 */
export declare interface SeparationSchema {
    /**
     * The type of separation.
     * Mandatory
     * @public
     */
    type: SeparationType;
    /**
     * The action to take when a separation event happens.
     * Optional. Defaulat to SeparationAction.NEW_DOCUMENT
     * @public
     */
    separationAction?: SeparationAction;
    /**
     * Set whether the page the that triggered the separation will be deleted.
     * Defaults to false.
     * Optional
     * @public
     */
    deletePage?: boolean;
}

/**
 * Enumeration for the available types of separation occurring during scanning.
 *
 * @public
 */
export declare enum SeparationType {
    /**
     * Separate when a barcode type and value is detected.
     *
     * @public
     */
    BARCODE = "BarCode",
    /**
     * Separate when a blank page is detected.
     */
    BLANK_PAGE = "BlankPage",
    /**
     * Separate every X amount of scanned pages.
     */
    EVERY_X = "EveryX"
}

declare interface StackClassSchema extends IndexClassSchema {
}

/**
 * author: kpentaris
 * date: 19-Jun-18
 */
/**
 * @public
 */
export declare enum ViewType {
    /**
     * No change to view type; current view type remains
     * @public
     */
    NO_CHANGE = 0,
    /**
     * Batch overview
     * @public
     */
    BATCH_OVERVIEW = 1,
    /**
     * Switch to Page view using the current active page viewer, if there is one.
     * IF no active page viewer exists, create one
     *
     * @public
     */
    ACTIVE_PAGE = 2,
    /**
     * Switch to Page view but open a new tab.
     *
     * @public
     */
    NEW_PAGE = 3
}

export { }
