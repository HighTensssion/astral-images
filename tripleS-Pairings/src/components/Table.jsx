import React, { useEffect } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/jquery.dataTables.css';
import 'datatables.net';

const Table = ({ data, columns }) => {
    console.log('Data:', data);
    console.log('Columns:', columns);

    useEffect(() => {
        const table = $('#dataTable').DataTable({
            data: data,
            columns: columns.map((col, index) => ({
                title: col.title,
                data: col.data,
            })),
            paging: false,
            searching: false,
            ordering: false,
            info: false,
            order: [],
            columDefs: [
                { orderable: false, targets: 0 },
            ],
            autoWidth: false,
            headerCallback: function (thead) {
                $(thead).find('th').each(function (index) {
                    if (index === 0 && columns[0].title?.img) {
                        $(this).html(`
                            <img
                                src="${columns[0].title.img}"
                                alt="${columns[0].title.text || 'Logo'}"
                                style="width: 100%; height: 100%;"
                            />
                        `); 
                    }
                    if (index === 0) {
                        $(this).css('background-color', '#000').css('color', '#f4f4f4');
                    } else if (index === 1) {
                        $(this).css('background-color', '#1E90FF').css('color', 'black');
                    } else if (index === 2) {
                        $(this).css('background-color', '#BF00FF').css('color', 'black');
                    } else if (index === 3) {
                        $(this).css('background-color', '#FAFA33').css('color', 'black');
                    } else if (index === 4) {
                        $(this).css('background-color', '#6C3').css('color', 'black');
                    } else if (index === 5) {
                        $(this).css('background-color', '#EC118F').css('color', 'black');
                    } else if (index === 6) {
                        $(this).css('background-color', '#EF98AA').css('color', 'black');
                    } else if (index === 7) {
                        $(this).css('background-color', '#5F9EA0').css('color', 'black');
                    } else if (index === 8) {
                        $(this).css('background-color', '#FFE4E1').css('color', 'black');
                    } else if (index === 9) {
                        $(this).css('background-color', '#FC3').css('color', 'black');
                    } else if (index === 10) {
                        $(this).css('background-color', '#FBA0E3').css('color', 'black');
                    } else if (index === 11) {
                        $(this).css('background-color', '#FFDF00').css('color', 'black');
                    } else if (index === 12) {
                        $(this).css('background-color', '#4169E1').css('color', 'black');
                    } else if (index === 13) {
                        $(this).css('background-color', '#FFA343').css('color', 'black');
                    } else if (index === 14) {
                        $(this).css('background-color', '#1034A6').css('color', 'black');
                    } else if (index === 15) {
                        $(this).css('background-color', '#C80815').css('color', 'black');
                    } else if (index === 16) {
                        $(this).css('background-color', '#FFA089').css('color', 'black');
                    } else if (index === 17) {
                        $(this).css('background-color', '#AB62B4').css('color', 'black');
                    } else if (index === 18) {
                        $(this).css('background-color', '#B7F54A').css('color', 'black');
                    } else if (index === 19) {
                        $(this).css('background-color', '#52D9BB').css('color', 'black');
                    } else if (index === 20) {
                        $(this).css('background-color', '#FF428A').css('color', 'black');
                    } else if (index === 21) {
                        $(this).css('background-color', '#C7A3DF').css('color', 'black');
                    } else if (index === 22) {
                        $(this).css('background-color', '#7BBA8D').css('color', 'black');
                    } else if (index === 23) {
                        $(this).css('background-color', '#CFF4FF').css('color', 'black');
                    } else if (index === 24) {
                        $(this).css('background-color', '#FEAA61').css('color', 'black');
                    }
                });
            },
            createdRow: function (row, rowData, rowIndex, data) {
                $(row).find('td').each(function (colIndex) {
                    if (rowIndex === colIndex - 1) {
                        const columnKey = columns[colIndex]?.data;
                        const cellData = rowData[columnKey];
                        if (cellData && typeof cellData === 'object' && cellData.img) {
                            $(this).html(`
                                <img
                                    src="${cellData.img}"
                                    alt="${cellData.text || 'Diagonal Image'}"
                                    style="width: 100%; height: 100%; object-fit: cover; transform: scale(2.5);"
                                />
                            `);
                            $(this).css({
                                padding: 0,
                                margin: 0,
                                overflow: 'hidden',
                                textAlign: 'center',
                                verticalAlign: 'middle',
                            });
                        } else {
                            $(this).text(cellData || '');
                        }

                        if (colIndex === 1) {
                            $(this).css('background-color', '#1E90FF').css('color', 'black');
                        } else if (colIndex === 2) {
                            $(this).css('background-color', '#BF00FF').css('color', 'black');
                        } else if (colIndex === 3) {
                            $(this).css('background-color', '#FAFA33').css('color', 'black');
                        } else if (colIndex === 4) {
                            $(this).css('background-color', '#6C3').css('color', 'black');
                        } else if (colIndex === 5) {
                            $(this).css('background-color', '#EC118F').css('color', 'black');
                        } else if (colIndex === 6) {
                            $(this).css('background-color', '#EF98AA').css('color', 'black');
                        } else if (colIndex === 7) {
                            $(this).css('background-color', '#5F9EA0').css('color', 'black');
                        } else if (colIndex === 8) {
                            $(this).css('background-color', '#FFE4E1').css('color', 'black');
                        } else if (colIndex === 9) {
                            $(this).css('background-color', '#FC3').css('color', 'black');
                        } else if (colIndex === 10) {
                            $(this).css('background-color', '#FBA0E3').css('color', 'black');
                        } else if (colIndex === 11) {
                            $(this).css('background-color', '#FFDF00').css('color', 'black');
                        } else if (colIndex === 12) {
                            $(this).css('background-color', '#4169E1').css('color', 'black');
                        } else if (colIndex === 13) {
                            $(this).css('background-color', '#FFA343').css('color', 'black');
                        } else if (colIndex === 14) {
                            $(this).css('background-color', '#1034A6').css('color', 'black');
                        } else if (colIndex === 15) {
                            $(this).css('background-color', '#C80815').css('color', 'black');
                        } else if (colIndex === 16) {
                            $(this).css('background-color', '#FFA089').css('color', 'black');
                        } else if (colIndex === 17) {
                            $(this).css('background-color', '#AB62B4').css('color', 'black');
                        } else if (colIndex === 18) {
                            $(this).css('background-color', '#B7F54A').css('color', 'black');
                        } else if (colIndex === 19) {
                            $(this).css('background-color', '#52D9BB').css('color', 'black');
                        } else if (colIndex === 20) {
                            $(this).css('background-color', '#FF428A').css('color', 'black');
                        } else if (colIndex === 21) {
                            $(this).css('background-color', '#C7A3DF').css('color', 'black');
                        } else if (colIndex === 22) {
                            $(this).css('background-color', '#7BBA8D').css('color', 'black');
                        } else if (colIndex === 23) {
                            $(this).css('background-color', '#CFF4FF').css('color', 'black');
                        } else if (colIndex === 24) {
                            $(this).css('background-color', '#FEAA61').css('color', 'black');
                        }
                        return;
                    }

                    const columnKey = columns[colIndex]?.data;
                    const cellData = rowData[columnKey];

                    if (colIndex === 0) {
                        $(this).text(cellData || '');
                        return;
                    }

                    // Add click event listener
                    $(this).on('click', function () {
                        const isFlipped = $(this).hasClass('flipped');
                        $('.flipped').removeClass('flipped');
                        if (!isFlipped) {
                            $(this).addClass('flipped');
                        }
                    });

                    // Render cell content
                    if (cellData && typeof cellData === 'object') {
                        const text = cellData.text || '';
                        const img = cellData.img || '';
                        const info = cellData.info || 'No additional information available.';

                        $(this).html(`
                            <div class="cell-content">
                                <div class="front">
                                    ${img ? `<img src="${img}" alt="${text}" style="width: 100%; height: 100%; object-fit: cover;" />` : `<p>${text}</p>`}
                                </div>
                                <div class="back">
                                    <p>${info}</p>
                                </div>
                            </div>
                        `);
                    } else {
                        // Handle non-object cellData (e.g., strings or empty cells)
                        $(this).html(`
                            <div class="cell-content">
                                <div class="front">${cellData || ''}</div>
                                <div class="back">
                                    <p>No additional information available.</p>
                                </div>
                            </div>
                        `);
                    }
                });
                const rowLabel = rowData.label;
                if (rowLabel === 'Seoyeon') {
                    $('td:eq(0)', row).css('background-color', '#1E90FF').css('color', 'black');
                } else if (rowLabel === 'Hyerin') {
                    $('td:eq(0)', row).css('background-color', '#BF00FF').css('color', 'black');
                } else if (rowLabel === 'Jiwoo') {
                    $('td:eq(0)', row).css('background-color', '#FAFA33').css('color', 'black');
                } else if (rowLabel === 'Chaeyeon') {
                    $('td:eq(0)', row).css('background-color', '#6C3').css('color', 'black');
                } else if (rowLabel === 'Yooyeon') {
                    $('td:eq(0)', row).css('background-color', '#EC118F').css('color', 'black');
                } else if (rowLabel === 'Soomin') {
                    $('td:eq(0)', row).css('background-color', '#EF98AA').css('color', 'black');
                } else if (rowLabel === 'Nakyoung') {
                    $('td:eq(0)', row).css('background-color', '#5F9EA0').css('color', 'black');
                } else if (rowLabel === 'Yubin') {
                    $('td:eq(0)', row).css('background-color', '#FFE4E1').css('color', 'black');
                } else if (rowLabel === 'Kaede') {
                    $('td:eq(0)', row).css('background-color', '#FC3').css('color', 'black');
                } else if (rowLabel === 'Dahyun') {
                    $('td:eq(0)', row).css('background-color', '#FBA0E3').css('color', 'black');
                } else if (rowLabel === 'Kotone') {
                    $('td:eq(0)', row).css('background-color', '#FFDF00').css('color', 'black');
                } else if (rowLabel === 'Yeonji') {
                    $('td:eq(0)', row).css('background-color', '#4169E1').css('color', 'black');
                } else if (rowLabel === 'Nien') {
                    $('td:eq(0)', row).css('background-color', '#FFA343').css('color', 'black');
                } else if (rowLabel === 'Sohyun') {
                    $('td:eq(0)', row).css('background-color', '#1034A6').css('color', 'black');
                } else if (rowLabel === 'Xinyu') {
                    $('td:eq(0)', row).css('background-color', '#C80815').css('color', 'black');
                } else if (rowLabel === 'Mayu') {
                    $('td:eq(0)', row).css('background-color', '#FFA089').css('color', 'black');
                } else if (rowLabel === 'Lynn') {
                    $('td:eq(0)', row).css('background-color', '#AB62B4').css('color', 'black');
                } else if (rowLabel === 'Joobin') {
                    $('td:eq(0)', row).css('background-color', '#B7F54A').css('color', 'black');
                } else if (rowLabel === 'Hayeon') {
                    $('td:eq(0)', row).css('background-color', '#52D9BB').css('color', 'black');
                } else if (rowLabel === 'Shion') {
                    $('td:eq(0)', row).css('background-color', '#FF428A').css('color', 'black');
                } else if (rowLabel === 'Chaewon') {
                    $('td:eq(0)', row).css('background-color', '#C7A3DF').css('color', 'black');
                } else if (rowLabel === 'Sullin') {
                    $('td:eq(0)', row).css('background-color', '#7BBA8D').css('color', 'black');
                } else if (rowLabel === 'Seoah') {
                    $('td:eq(0)', row).css('background-color', '#CFF4FF').css('color', 'black');
                } else if (rowLabel === 'Jiyeon') {
                    $('td:eq(0)', row).css('background-color', '#FEAA61').css('color', 'black');
                }
            },
        });

        return () => {
            table.destroy(true);
        };
    }, [data, columns]);

    return (
        <div>
            <table id="dataTable" className="display">
                <thead>
                    <tr>
                        {columns.map((col, index) => (
                            <th key={index}>{col.title.text || col.title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    );
};

export default Table;