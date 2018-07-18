import { IGrid } from '@syncfusion/ej2-grids';


export interface simple {
    prop: string;
    type?: string
    data?: string[];
}

export interface complex {
    prop: { [key: string]: object };
    isMulti?: boolean;
}

export function getGridMethods(grid: IGrid): { [Key: string]: string | object }[] {
    let methods: { [Key: string]: string | object }[] = [];
    methods.push({
        name: 'autoFitColumns',
        fields: {
            data: getcolumnFields(grid),
            type: 'array'
        }
    });

    methods.push({
        name: 'copy',
        withHeader: {
            type: 'bool'
        }
    });
    methods.push({
        name: 'destroy'
    });
    methods.push({
        name: 'startEdit'
    });
    methods.push({
        name: 'endEdit'
    });
    methods.push({
        name: 'closeEdit'
    });
    methods.push({
        name: 'deleteRecord',
        fieldName: {
            type: 'text'
        }
    });
    methods.push({
        name: 'excelExport'
    });
    methods.push({
        name: 'csvExport'
    });
    methods.push({
        name: 'pdfExport'
    });
    methods.push({
        name: 'clearFiltering'
    });
    methods.push({
        name: 'filterByColumn',
        fieldName: {
            type: 'text'
        },
        fieldOperator: {
            type: 'text'
        },
        filterValue: {
            type: 'text'
        },
        predicate: {
            type: 'text'
        },
        matchCase: {
            type: 'bool'
        },
        actualFilterValue: {
            type: 'text'
        },
        actualOperator: {
            type: 'text'
        }
    });
    methods.push({
        name: 'goToPage',
        pageNo: {
            type: 'text'
        }
    });
    methods.push({
        name: 'groupColumn',
        columns: {
            type: 'select',
            data: getcolumnFields(grid)
        }
    });
    methods.push({
        name: 'ungroupColumn',
        field: {
            type: 'select',
            data: getcolumnFields(grid)
        }
    });
    methods.push({
        name: 'hideColumns',
        columnName: {
            type: 'text'
        },
        hideBy: {
            type: 'select',
            data: ['field', 'headerText']
        }

    });
    methods.push({
        name: 'showColumns',
        columnName: {
            type: 'text'
        },
        showBy: {
            type: 'select',
            data: ['field', 'headerText']
        }
    });
    methods.push({
        name: 'hideSpinner'
    });
    methods.push({
        name: 'showSpinner'

    });
    methods.push({
        name: 'print'
    });
    methods.push({
        name: 'refresh'
    });
    methods.push({
        name: 'refreshColumns'
    });
    methods.push({
        name: 'refreshHeader'
    });
    methods.push({
        name: 'reorderColumns',
        fromFname: {
            type: 'text'
        },
        ToFname: {
            type: 'text'
        }
    });
    methods.push({
        name: 'search',
        searchText: {
            type: 'text'
        }
    });
    methods.push({
        name: 'clearSelection'
    });
    methods.push({
        name: 'selectCell',
        cellIndex: {
            type: 'text'
        },
        isToggle: {
            type: 'bool'
        }
    });
    methods.push({
        name: 'selectRow',
        rowIndex: {
            type: 'text'
        },
        isToggle: {
            type: 'bool'
        }
    });
    methods.push({
        name: 'selectRows',
        rowIndices: {
            type: 'array',
            data: [1, 2, 3, 4, 5, 6, 7, 8]
        }
    });
    methods.push({
        name: 'clearSorting'
    });
    methods.push({
        name: 'sortColumn',
        columnName: {
            type: 'select',
            data: getcolumnFields(grid)
        },
        direction: {
            type: 'select',
             data: ['Ascending', 'Descending']
        },
        isMultiSort: {
            type: 'bool'
        }

    });
    methods.push({
        name: 'updateExternalMessage',
        message: {
            type: 'text'
        }
    });
    return methods;
}

export function getGridProps(grid: IGrid): (simple | complex)[] {
    let props: (simple | complex)[] = [];
    props.push({ prop: 'allowSorting', type: 'bool' });
    props.push({ prop: 'allowMultiSorting', type: 'bool' });
    props.push({ prop: 'allowGrouping', type: 'bool' });
    // props.push({
    //     prop: {
    //         'sortSettings': {
    //             'columns': {
    //                 'field': {
    //                     data: getcolumnFields(grid),
    //                     type: 'array'
    //                 },
    //                 'direction': {
    //                      data: ['Ascending', 'Descending'],
    //                     type: 'select'
    //                 }
    //             },
    //             'allowUnSort': 'bool'
    //         },
    //     }
    // });
    props.push({
        prop: {
            'groupSettings': {
                showDropArea: 'bool',
                showToggleButton: 'bool',
                showGroupedColumn: 'bool',
                showUngroupButton: 'bool',
                disablePageWiseAggregates: 'bool',
                hideCaptionCount: 'bool',
                columns: {
                    data: getcolumnFields(grid),
                    type: 'array'
                }
            }
        }
    });
    props.push({ prop: 'allowExcelExport', type: 'bool' });
    props.push({ prop: 'allowPdfExport', type: 'bool' });
    props.push({ prop: 'allowFiltering', type: 'bool' });
    props.push({
        prop: {
            'filterSettings': {
                showFilterBarStatus: 'bool',
                immediateModeDelay : 'text',
                mode: {
                    data: ['OnEnter', 'Immediate'],
                    type: 'select'
                },
                type: {
                    data: ['FilterBar', 'Menu', 'CheckBox', 'Excel'],
                    type: 'select'
                }
            }
        }
    });
    props.push({ prop: 'allowPaging', type: 'bool' });
    props.push({
        prop: {
            'pageSettings': {
                currentPage: 'text',
                enableQueryString: 'bool',
                pageCount: 'text',
                pageSize: 'text',
                pageSizes: 'bool'

            }
        }
    });
    props.push({ prop: 'allowReordering', type: 'bool' });
    props.push({ prop: 'allowResizing', type: 'bool' });

    props.push({
        prop: {
            'editSettings': {
                allowAdding: 'bool',
                allowDeleting: 'bool',
                allowEditOnDblClick: 'bool',
                allowEditing: 'bool',
                showConfirmDialog: 'bool',
                showDeleteConfirmDialog: 'bool',
                mode: {
                    data: ['Normal', 'Dialog', 'Batch'],
                    type: 'select'
                }
            }
        }
    });
    props.push({
        prop: {
            'searchSettings': {
                fields: {
                    data: getcolumnFields(grid),
                    type: 'select'
                },
                ignoreCase: 'bool',
                Key: 'bool',
                operator: {
                    data: ['startswith', 'endswith', 'contains', 'equal', 'notequal'],
                    type: 'select'
                }
            }
        }
    });
    props.push({ prop: 'allowSelection', type: 'bool' });
    props.push({
        prop: 'selectedRowIndex', type: 'text'
    });
    props.push({
        prop: {
            'selectionSettings': {
                cellSelectionMode: {
                    data: ['Flow', 'Box'],
                    type: 'select'
                },
                checkboxOnly: 'bool',
                mode: {
                    data: ['Row', 'Cell', 'Both'],
                    type: 'select'
                },
                type: {
                    data: ['Single', 'Multiple'],
                    type: 'select'
                },
                persistSelection: 'bool'
            }
        }
    });
    props.push({ prop: 'allowTextWrap', type: 'bool' });
    props.push({
        prop: {
            'textWrapSettings': {
                wrapMode: {
                    data: ['Both', 'Content', 'Header'],
                    type: 'select'
                }
            }
        }
    });
    props.push({
        prop: 'showColumnMenu', type: 'bool'
    });
    props.push({
        prop:
            'columnMenuItems',
        data: ['SortAscending', 'SortDescending', 'Group', 'Ungroup', 'AutoFit', 'AutoFitAll', 'ColumnChooser', 'Filter'],
        type: 'array'
    });
    props.push({
        prop:
            'contextMenuItems',
        data: ['AutoFit', 'AutoFitAll', 'SortAscending', 'SortDescending',
            'Copy', 'Edit', 'Delete', 'Save', 'Cancel',
            'PdfExport', 'ExcelExport', 'CsvExport', 'FirstPage', 'PrevPage',
            'LastPage', 'NextPage'],
        type: 'array'

    });

    props.push({ prop: 'enableAltRow', type: 'bool' });
    props.push({ prop: 'enableHover', type: 'bool' });
    props.push({ prop: 'enableRtl', type: 'bool' });
    props.push({ prop: 'locale', type: 'select', data: ['en-US', 'de-DE'] });
    props.push({ prop: 'rowHeight', type: 'text' });

    props.push({
        prop: 'gridLines', data: ['Default', 'Both', 'Vertical', 'Horizontal', 'None'], type: 'select'
    });
    props.push({
        prop: 'height', type: 'text'
    });
    props.push({
        prop: 'width', type: 'text'
    });
    props.push({
        prop: 'printMode', data: ['Allpages', 'CurrentPage'], type: 'select'
    });

    props.push({
        prop: 'showColumnChooser', type: 'bool'
    });
    props.push({
        prop: 'toolbar',
        data: [
            'Add',
            'Edit',
            'Update',
            'Delete',
            'Cancel',
            'Search',
            'Print',
            'ExcelExport',
            'PdfExport',
            'CsvExport',
			'ColumnChooser'
        ],
        type: 'array'
    });
    return props;
}

export function getcolumnFields(grid: IGrid): string[] {
    let field: string[] = [];
    grid.getColumns().forEach((element: any) => {
        if(element.field) {
            field.push(element.field);
        }
    });
    return field;
}

let grid: Object = {
    allowGrouping: false,
    allowSorting: false,
    allowPaging: false,
    enableAltRow: true,
    enableHover: true, 
    allowTextWrap: false,
    textWrapSettings: {wrapMode:"Both"},
    pageSettings: {currentPage: 1, pageSize: 12, pageCount: 8, enableQueryString: false, pageSizes: false, template: null},
    enableVirtualization: false,
    enableColumnVirtualization: false,
    searchSettings: { ignoreCase: true, fields: [], operator: 'contains', key: '' },
    allowMultiSorting: true,
    allowExcelExport: false,
    allowPdfExport: false,
    sortSettings: {columns: []},
    allowSelection: true,
    selectedRowIndex: -1,
    selectionSettings: {mode: 'Row', cellSelectionMode: 'Flow', type: 'Single'},
    allowFiltering: false,
    allowReordering: false,
    allowResizing: false,
    allowRowDragAndDrop: false,
    rowDropSettings: {targetID: ''},
    filterSettings: {columns: [], type: 'FilterBar', mode: 'Immediate', showFilterBarStatus: true, immediateModeDelay: 1500 , operators: {}}, 
    showColumnMenu: false,
    groupSettings: {showDropArea: true, showToggleButton: false, showGroupedColumn: false, showUngroupButton: true, columns: []},
    editSettings: { allowAdding: false, allowEditing: false, allowDeleting: false, mode:'Normal', allowEditOnDblClick: true, showConfirmDialog: true, showDeleteConfirmDialog: false },
    showColumnChooser: false,
    height: 'auto',
    width: 'auto',
    gridLines: 'Default',
    childGrid: null,
    queryString: null,
    printMode: 'AllPages',
    dataSource: [],
    rowHeight: null,
    query: null,
    currencyCode: 'USD',
    toolbar: null,
    contextMenuItems: null,
    columnMenuItems: null,
    frozenRows: 0,
    frozenColumns: 0,
    locale: 'en-US',
    
    groupColumns: [{field: 'OrderID' , check: false}, {field: 'Freight' , check: false},{field: 'CustomerID' , check: false},
    {field: 'CustomerName' , check: false},{field: 'OrderDate' , check: false},{field: 'ShippedDate' , check: false},
    {field: 'ShipName' , check: false},{field: 'ShipAddress' , check: false},
    {field: 'ShipCountry' , check: false}],
    searchColumns: [{field: 'OrderID' , check: false}, {field: 'Freight' , check: false},{field: 'CustomerID' , check: false},
    {field: 'CustomerName' , check: false},{field: 'OrderDate' , check: false},{field: 'ShippedDate' , check: false},
    {field: 'ShipName' , check: false},{field: 'ShipAddress' , check: false},
    {field: 'ShipCountry' , check: false}],
    columnMenu: [{item: "SortAscending", check: false},{item: "SortDescending", check: false},{item: "Group", check: false},
    {item: "Ungroup", check: false},{item: "AutoFit", check: false},{item: "AutoFitAll", check: false},{item: "ColumnChooser", check: false},{item: "Filter", check: false}],
    toolbarItems: [
        {item: "Add", check: false},{item: "Edit", check: false},{item: "Update", check: false},{item: "Delete", check: false},{item: "Cancel", check: false},{item: "Search", check: false},{item: "Print", check: false},{item: "ExcelExport", check: false},{item: "PdfExport", check: false},{item: "CsvExport", check: false},{item: "ColumnChooser", check: false}
    ],
    contextMenu: [
        {item: "AutoFit", check: false},{item: "AutoFitAll", check: false},{item: "SortAscending", check: false},{item: "SortDescending", check: false},{item: "Copy", check: false},{item: "Edit", check: false},{item: "Delete", check: false},{item: "Save", check: false},{item: "Cancel", check: false},{item: "PdfExport", check: false},{item: "ExcelExport", check: false},{item: "CsvExport", check: false},{item: "FirstPage", check: false},{item: "PrevPage", check: false},{item: "LastPage", check: false},{item: "NextPage", check: false}
    ]
};

export let gridData = function() {
    return JSON.parse(JSON.stringify(grid));;
}


