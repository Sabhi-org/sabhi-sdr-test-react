import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import { Card, Typography, Space } from 'antd';
import { io } from "socket.io-client";


const { Text, Link } = Typography;

export default function OmniCheck() {

    const arr = [
        {
            username: 'Ameer',
            fathername: 'Sarfraz'
        }
    ];

    useEffect(() => {
        handleswirlone();

    }, []);

    // socket
    useEffect(() => {
        const ENDPOINT = 'http://localhost:12345/';
        const socket = io(ENDPOINT);
        console.log(socket);
        socket.on('chat', data => {
            console.log(data);
        });

        socket.on('displayOmniCheck', data => {
            console.log(data);
        });

    }, []);

    function handleswirlone() {
        console.log('its me...');
        let timerInterval
        Swal.fire({
            title: 'Waiting for omni check',
            // html: 'I will close in <b></b> milliseconds.',
            text: 'please wait while we validate your information it will take a few minutes..',
            timer: 30000,
            timerProgressBar: true,
            allowOutsideClick: false,
            icon: 'info',
            didOpen: () => {
                Swal.showLoading()
                timerInterval = setInterval(() => {
                    const content = Swal.getContent()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                            b.textContent = Swal.getTimerLeft()
                        }
                    }
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            // if (result.dismiss === Swal.DismissReason.timer) {
            //     console.log('I was closed by the timer')

            // }

            handleswirlTwo();
        })
    }



    function handleswirlTwo(arr) {

        var username = 'Ameer Hamza';
        var fathername = 'Sarfraz';

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({
            title: 'Please confirm following',
            html: "please check if this is your information" + '</br>' + 'username:' + username + '</br>' + 'fathername:' + fathername,
            allowOutsideClick: false,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, it is me',
            cancelButtonText: 'No,it is not me',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Confirmed!',
                    'Your data has been confirmed',
                    'success'
                )
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your data could not be confirmed :(',
                    'error'
                )
            }
        })
    }


    return (
        <div>
            <Card style={{ textAlign: 'center', marginTop: 18 }}>
                <p><Text><h3>You are all set</h3></Text></p>
                <p><Text type="secondary"><h4>Thank you for using Sabhi</h4></Text></p>

            </Card>
        </div>
    );
}