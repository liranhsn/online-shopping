import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './ItemInformation.scss';

const ItemInformation = () => {
    return (
        <div className="Accordion">
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className="Accordion-Typo-title">
                        מדריך מידות
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        המידות של החולצה הן סטנדרטיות בגזרה רגילה (Mid Oversize
                        - קצת רחבה על הגוף) לדוגמא אם אתה לובש L בחולצה זו תבחר
                        L. הדוגמן בגובה 1.86 שוקל 78 לובש מידה M
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className="Accordion-Typo-title">
                        תיאור מוצר
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        את קולקציית הפשתן החדשה שלנו כבר הכרת? חולצה מכופתרת
                        טטרה בגזרה מושלמת שתתאים לכל הופעה , במיוחד לעונת הקיץ
                        הלוהטת. החולצה מגיעה במגוון צבעים וטקסטורה חדשנית וצעירה
                        , מתאימה לחגים ויושבת מושלם על הגוף צבע -כתום קולקציית
                        קיץ עיצוב וייצור שלנו
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className="Accordion-Typo-title">
                        משלוחים והחלפות
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        משלוח עד 4 ימי עסקים. לרוב מגיע יום למחרת. לא ניתן לאסוף
                        הזמנה מהחנות. ש לנו שירות החלפות ממש נוח במידה והפריטים
                        לא מתאימים.. מעדכנים אותנו שצריך החלפה ושולחים לנו מה
                        רוצים במקום. אנו שולחים את הפריטים המתאימים ולוקחים את
                        הלא מתאימים, כל התהליך כרוך ב40₪ כיוון וזה כולל שני
                        משלוחים. הנחיות להחזרת פריט יש לוודא שעברו פחות מ-14 יום
                        מקבלת החבילה, שלא נעשה בפריט כל שימוש ושלא קיים בו שום
                        פגם/נזק
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className="Accordion-Typo-title">
                        שאלות ותשובות
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <b> איך מבצעים החלפה?</b>
                        <br />
                        קיבלת מוצר והוא לא יושב עליך כמו שציפית? המידה קטנה או
                        גדולה עליך? יש לנו שירות החלפות ממש נוח עם שליח ובחנויות
                        (במידה ולא חלפו 14 ימים מקבלת הפריטים) לפרטים נוספים
                        לחצו כאן 😊
                        <b>כמה זמן לוקח למשלוח להגיע?</b>
                        <br />
                        רוב המשלוחים שלנו מגיעים יום למחרת אך אנו מתחייבים
                        לאספקת משלוח של עד 4 ימי עסקים 😇
                        <b>איפה ממוקמות החנויות שלכם?</b>
                        <br />
                        נכון לעכשיו יש לנו שני סניפים - ירכא וג'וליס 📍 לשעות
                        הפעילות ודרכי ההגעה של שני הסניפים לחצו כאן
                        <b>איך אני יכול לדעת איזה מידה אני בבגדים שלכם?</b>
                        <br />
                        מתלבט איזה מידה תתאים לך? 🙇🏻 בתוך כל פריט יש מדריך מידות
                        - כך שתוכלו להשוות את הגובה והמשקל שלכם למידות הדוגמן
                        המצולם וכך להתעזר בהתאמת מידה בנוסף, צוות האתר ישמח
                        לסייע לכם בהתאמת מידה, שלחו לנו את הפריט אותו תרצו לרכוש
                        ואת הגובה והמשקל שלכם, לחצו על כפתור הווצאפ (בפינה
                        השמאלית למטה)
                        <b>יש את המידה שלי/ דגם מסוים במלאי?</b>
                        <br />
                        חיפשת דגם או מידה ולא מצאת? 🤯 המידות הקיימות במלאי האתר
                        הן המידות המוצגות בכל פריט במידה ולא מצאתם דגם ספציפי,
                        כנראה שהוא אזל מהמלאי, אנחנו דואגים תמיד לחדש ולהביא
                        דגמים יפים יותר הישארו מעודכנים בקולקציה החדשה
                        ובאינסטגרם שלנו Rh-Collection
                        <b>איך אפשר לשלם?</b>
                        <br />
                        האתר שלנו מאובטח בתקנים המחמירים ביותר, ומאפשר רכישה
                        בטוחה 💸 ניתן לשלם ב-3 דרכי תשלום: פייפאל, ביט ואשראי
                        <b>יש לי שאלה שלא נענתה כאן, לאן אפשר לפנות ❓</b>
                        <br />
                        במידה ולא מצאתם תשובה העונה על השאלה שלכם, תוכלו לפנות
                        לצוות האתר בווצאפ (דרך הכפתור בפינה השמאלית למטה) וצוות
                        האתר ידאג לחזור אליכם בהקדם
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default ItemInformation;
