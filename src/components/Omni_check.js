import React, { useEffect } from 'react';
import Swal from 'sweetalert2'


export default function OmniCheck() {

    const arr = [
        {
            username: 'Ameer',
            fathername: 'Sarfraz'
        }
    ];

    useEffect(() => {
        handleswirlone();

    }, [])

    function handleswirlone() {
        console.log('its me...');
        let timerInterval
        Swal.fire({
            title: 'Waiting for omni check',
            html: 'I will close in <b></b> milliseconds.',
            timer: 10000,
            timerProgressBar: true,
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
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
                handleswirlTwo();
            }
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
            title: 'Please confirm',
            text: "please check if this is your information" + username + fathername,

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

        </div>
    );
}