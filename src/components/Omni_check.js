import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import { Card, Typography, Space } from 'antd';
import { io } from "socket.io-client";


const { Text, Link } = Typography;

export default function OmniCheck() {


    const [omniData, setOmniData] = useState("");
    useEffect(() => {
        Swal.fire({
            title: 'Waiting for omni check',
            text: 'please wait while we validate your information it will take a few minutes..',
            timer: 500000,
            timerProgressBar: true,
            allowOutsideClick: false,
            icon: 'info',
            didOpen: () => {
                Swal.showLoading();
            }
        });

    }, []);


    let test = ""
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
            test = data.message;
            setOmniData(data.message);
            Swal.hideLoading();
            handleswirlTwo();
        });

    }, []);


    function handleswirlTwo() {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: 'Please confirm following',
            html: `${test}`,
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
        });
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