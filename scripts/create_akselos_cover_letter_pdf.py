from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import HRFlowable, Paragraph, SimpleDocTemplate, Spacer


OUTPUT = Path(r"C:\Users\ttnha\Documents\projects\rendercv\Akselos_Cover_Letter.pdf")


def main():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    document = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=LETTER,
        rightMargin=inch,
        leftMargin=inch,
        topMargin=0.82 * inch,
        bottomMargin=0.82 * inch,
        title="Tran Trong Nhan - Akselos Cover Letter",
        author="Tran Trong Nhan",
    )

    styles = getSampleStyleSheet()
    name = ParagraphStyle(
        "Name", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=18,
        leading=22, textColor=colors.HexColor("#0B2545"), spaceAfter=2,
    )
    contact = ParagraphStyle(
        "Contact", parent=styles["Normal"], fontName="Helvetica", fontSize=9.4,
        leading=12, textColor=colors.HexColor("#595959"), spaceAfter=18,
    )
    meta = ParagraphStyle(
        "Meta", parent=styles["Normal"], fontName="Helvetica", fontSize=11,
        leading=14, spaceAfter=0,
    )
    subject = ParagraphStyle(
        "Subject", parent=meta, fontName="Helvetica-Bold", spaceAfter=14,
    )
    body = ParagraphStyle(
        "Body", parent=styles["Normal"], fontName="Helvetica", fontSize=11,
        leading=15, alignment=TA_LEFT, spaceAfter=10,
    )
    signature = ParagraphStyle(
        "Signature", parent=body, fontName="Helvetica-Bold", textColor=colors.HexColor("#0B2545"),
        spaceAfter=0,
    )

    story = [
        Paragraph("TRAN TRONG NHAN", name),
        HRFlowable(width="100%", thickness=1.2, color=colors.HexColor("#2E74B5"), spaceAfter=6),
        Paragraph("Ho Chi Minh City, Vietnam  |  ttnhan227@gmail.com  |  linkedin.com/in/trantrongnhan", contact),
        Paragraph("August 14, 2026", meta),
        Paragraph("Akselos Hiring Team", meta),
        Paragraph("Ho Chi Minh City, Vietnam", meta),
        Spacer(1, 8),
        Paragraph("Re: Junior Software Developer", subject),
        Paragraph("Dear Akselos Hiring Team,", body),
        Paragraph(
            "I am writing to apply for the Junior Software Developer position in Ho Chi Minh City. "
            "I recently completed an Advanced Diploma in Software Engineering and have built full-stack "
            "applications using C#, Java, Python, and modern web technologies. I am especially interested "
            "in roles where careful software design, automation, and complex technical data meet.",
            body,
        ),
        Paragraph(
            "Most recently, I developed InsightPDF, a secure document-processing application built with "
            "Python, FastAPI, PostgreSQL, Celery, Redis, React, and Docker. The project strengthened my "
            "experience with backend design, asynchronous workflows, data processing, authenticated file "
            "access, and building practical interfaces around complex operations. It also gave me a hands-on "
            "understanding of how reliable background jobs and clear system boundaries make technical products "
            "easier to use and maintain.",
            body,
        ),
        Paragraph(
            "I am drawn to Akselos because the role combines software development, automation testing, and "
            "engineering-focused data. My foundation in object-oriented programming with Java and C#, together "
            "with my current focus on Python backend systems, would help me learn the Akselos platform and "
            "contribute thoughtfully to its engineering workflows. I value writing clear, testable code and "
            "working closely with others to solve difficult problems.",
            body,
        ),
        Paragraph(
            "I would welcome the opportunity to discuss how my project experience and willingness to learn could "
            "support the Akselos team. Thank you for your time and consideration.",
            body,
        ),
        Spacer(1, 5),
        Paragraph("Best regards,", body),
        Paragraph("Tran Trong Nhan", signature),
    ]
    document.build(story)


if __name__ == "__main__":
    main()
