import React from 'react';
import { useRouter } from 'next/router';

const Slug = () => {
    const router = useRouter();
    const {slug } = router.query;
    return(<> <div>{slug}</div>
    <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae dignissimos voluptates quod illum. Officia voluptates accusamus aliquam! Ratione aut ex nostrum culpa minus expedita quos aspernatur earum dolores, quam unde.
    </div>
    </>)
}

export default Slug;