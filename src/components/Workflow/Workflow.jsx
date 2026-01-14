import s from './Workflow.module.css'

const Workflow = () => {
    return (
        <section className={s.container}>
            <h2 className={s.title}>Workflow</h2>

            <div className={s.content_wrap}>
                <div className={s.img_wrap}>
                    <img src='/public/images/workflow1.png' alt='Karyna Yurkova' className={s.workflow_img}/>
                </div>
                <div className={s.text_wrap}>
                    <div className={s.text_container}>
                        <p>
                            Analysis &amp; Research: Studying the niche, competitors, and target audience; defining project goals.<br />
                            Idea &amp; Concept: Developing visual style, color palette and UI components.
                        </p>
                    </div>
                    <div className={s.text_container}>
                        <p>
                            UX Design: Creating information architecture and page prototypes.<br />
                            UI Design: Finalizing visual style, adding<br />
                            graphics and interactive elements.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    )
 }

export default Workflow